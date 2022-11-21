import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setdeletingDoctor] = useState(null);

  const closeModal = () => {
    setdeletingDoctor(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("AccessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch {}
    },
  });

  const handledeletedoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`${doctor.name} Deleted SuccessFully`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold">Manage Doctors {doctors?.length}</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.L</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id} className="hover">
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setdeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are You Sure To DELETE?`}
          message={`If You Delete to ${deletingDoctor.name}. It Can't be Undone.`}
          modaldata={deletingDoctor}
          successbuttonname="Delete"
          successaction={handledeletedoctor}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
