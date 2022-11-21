import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setAdmin] = useState("");
  const [isadminloading, setisAdminloadng] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.isadmin);
          setisAdminloadng(false);
        });
    }
  }, [email]);
  return [isAdmin, isadminloading];
};

export default useAdmin;
