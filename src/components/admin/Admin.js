import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import { myApi } from "../../App";
import { exportArray } from "../../_helpers/exportArray";

export default function Admin() {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(myApi + "/admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const result = await data.json();
        console.log("👉 result", result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch(myApi + "/logout", {
        method: "GET",
        credentials: "include",
        headers: {
          // Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      console.log("👉 result", result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-yellow h-screen w-full">
      <Nav />
      <div className="flex flex-col">
        <div className="text-xl py-8 mx-auto">Admin Panel</div>
        <div className="flex gap-5 mx-auto">
          <button
            className="bg-darkblue text-white py-1 px-3 border rounded-lg mx-auto"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
          <button
            className="bg-darkblue text-white py-1 px-3 border rounded-lg mx-auto"

            // onClick={() => exportArray("ws-export.json", eventData)}
          >
            Backup Data
          </button>
        </div>
      </div>
    </div>
  );
}
