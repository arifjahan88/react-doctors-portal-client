import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const navigate = useNavigate();
  const imageHostKey = "ffddeb2edca954e6ab34fa5f9dcd74ad";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://react-doctors-portal-server.vercel.app/appointmentspeciality"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleadddoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          const doctorsdata = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgdata.data.url,
          };

          //save doctors informations
          fetch("https://react-doctors-portal-server.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("AccessToken")}`,
            },
            body: JSON.stringify(doctorsdata),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              navigate("/dashboard/managedoctors");
              toast.success(`${data.name} named doctor Added`);
            });
        }
      });
  };
  return (
    <div className="w-96 p-7">
      <h2 className="text-3xl font-semibold">Add a Doctor</h2>
      <form onSubmit={handleSubmit(handleadddoctor)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name")}
            placeholder="You Name"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email Address is required" })}
            placeholder="Email"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email?.message}</p>}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Speciality</span>
          </label>
          <select {...register("specialty")} className="select select-bordered w-full">
            <option disabled selected>
              Select Speciality
            </option>

            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>

          <input
            type="file"
            className="input w-full"
            {...register("image", { required: "Image is required" })}
            placeholder="Image"
          />
        </div>
        <input className="btn btn-accent w-full text-white mt-4" value="Add Doctor" type="submit" />
      </form>
    </div>
  );
};

export default AddDoctor;
