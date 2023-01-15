import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setAdmin] = useState("");
  const [isadminloading, setisAdminloadng] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://react-doctors-portal-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.isadmin);
          setisAdminloadng(false);
        });
    }
  }, [email]);
  return [isAdmin, isadminloading];
};

export default useAdmin;
