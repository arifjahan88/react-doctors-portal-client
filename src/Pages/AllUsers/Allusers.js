import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const Allusers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("http://localhost:5000/users").then((res) => res.json()),
  });

  const handlemakeadmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("AccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfull.");
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold">This is all user</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.L</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button onClick={() => handlemakeadmin(user._id)} className="btn btn-xs btn-success">
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
