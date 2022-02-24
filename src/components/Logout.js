import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        let rawResponse = await fetch("/logout", {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });
        let responseJson = await rawResponse.json();
        console.log(responseJson);
        navigate("/login");
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    };
    handleLogout();
  }, []);
  return (
    <div className="bg-yellow min-h-screen w-full">
      <div className="bg-yellow flex h-screen w-full align-middle">
        <div className="flex justify-center flex-col mx-auto">
          <div className="flex items-center justify-center space-x-2 animate-pulse">
            <div className="w-8 h-8 bg-orange rounded-full"></div>
            <div className="w-8 h-8 bg-orange rounded-full"></div>
            <div className="w-8 h-8 bg-orange rounded-full"></div>
          </div>
          <div className="text-center text-sm text-black mt-4">Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
