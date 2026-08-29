import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-700">
      {/* navbar */}
      <div className="navbar p-4 bg-black text-white">
        <h1>Dashboard</h1>
      </div>

      <div className="w-full h-[600px] flex">
        {/* sidebar */}
        <div className="w-[20%] bg-red-800">
          <ul className="text-white">
            {[
              { url: "users", name: "users" },
              { url: "jobs", name: "jobs" },
              { url: "profile", name: "profile" },
            ].map((item, idx) => (
              <Link key={idx} to={item.url}>
                {" "}
                <li className="mb-3 font-bold">{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* main body */}
        <div className="bg-green-800 w-[80%]">
            <Outlet />


        </div>
      </div>
    </div>
  );
};

export default Dashboard;
