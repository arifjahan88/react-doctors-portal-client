import React from "react";
import { Link } from "react-router-dom";
import doctor from "../../../assets/images/doctor.jpg";

const AppointmentCategory = () => {
  const doctordata = [
    {
      id: 1,
      name: "Arif Jahan",
      specialities: "Newrology",
      Degree: "P.H.D",
      description: "Others",
      image: doctor,
    },
    {
      id: 2,
      name: "Arif Jahan",
      specialities: "Newrology",
      Degree: "P.H.D",
      description: "Others",
      image: doctor,
    },
    {
      id: 3,
      name: "Arif Jahan",
      specialities: "Newrology",
      Degree: "P.H.D",
      description: "Others",
      image: doctor,
    },
    {
      id: 4,
      name: "Arif Jahan",
      specialities: "Newrology",
      Degree: "P.H.D",
      description: "Others",
      image: doctor,
    },
    {
      id: 5,
      name: "Arif Jahan",
      specialities: "Newrology",
      Degree: "P.H.D",
      description: "Others",
      image: doctor,
    },
  ];
  return (
    <div>
      <h2 className="text-center font-bold text-4xl text-cyan-600 font-mono my-5">
        Please Select your specialties doctor.
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 m-5 w-2/3 mx-auto">
        <label
          htmlFor="dentist-modal"
          className="card shadow-xl cursor-pointer hover:bg-cyan-100 hover:scale-110 ease-in duration-200"
        >
          <div className="card-body text-center">
            <h2 className="lg:text-6xl md:text-5xl text-4xl text-secondary font-bold text-center my-10">
              Dentist
            </h2>
          </div>
        </label>
        <div className="card shadow-xl cursor-pointer hover:bg-cyan-100 hover:scale-110 ease-in duration-200">
          <div className="card-body text-center">
            <h2 className="lg:text-6xl md:text-5xl text-4xl text-secondary font-bold text-center my-10">
              Newrology
            </h2>
          </div>
        </div>
        <div className="card shadow-xl cursor-pointer hover:bg-cyan-100 hover:scale-110 ease-in duration-200">
          <div className="card-body text-center">
            <h2 className="lg:text-6xl md:text-5xl text-4xl text-secondary font-bold text-center my-10">
              Orthopedist
            </h2>
          </div>
        </div>
        <div className="card shadow-xl cursor-pointer hover:bg-cyan-100 hover:scale-110 ease-in duration-200">
          <div className="card-body text-center">
            <h2 className="lg:text-6xl md:text-5xl text-4xl text-secondary font-bold text-center my-10">
              Cardiology
            </h2>
          </div>
        </div>
      </div>

      {/* Dentist Modal */}
      <input type="checkbox" id="dentist-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="dentist-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg">Please Select Your Specific Doctor.</h3>
          {doctordata.map((data) => (
            <div
              key={data.id}
              className="flex my-8 hover:bg-lime-100 rounded-xl pl-3 hover:scale-110 duration-75 ease-in"
            >
              <div className="w-2/3 flex justify-center items-center">
                <img className="rounded-xl" src={data.image} alt="" />
              </div>
              <div className="w-full p-3">
                <h2>{data.name}</h2>
                <p>{data.specialities}</p>
                <p>{data.Degree}</p>
                <p>{data.description}</p>
                <Link to="/appointment">
                  <button className="btn btn-outline btn-xs mt-2">Appointment</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCategory;
