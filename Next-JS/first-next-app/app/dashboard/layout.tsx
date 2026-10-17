import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navbar */}

      <div className="bg-red-500 h-[50px]"></div>

      <div className="flex">
        {/* sidebar */}
        <div className="w-[300px] h-screen bg-green-500">
          <ul>
            <Link href={"/dashboard/users"}>
              <li>Users</li>
            </Link>
            <Link href={"/dashboard/analytics"}>
              {" "}
              <li>Analytics</li>
            </Link>
          </ul>
        </div>

        {/* body */}

        <div>
{/* widgets */}

<div className="flex gap-5">
    <div className="w-[250px] h-[150px] bg-yellow-300"></div>
<div className="w-[250px] h-[150px] bg-yellow-300"></div>
<div className="w-[250px] h-[150px] bg-yellow-300"></div>
<div className="w-[250px] h-[150px] bg-yellow-300"></div>
</div>


<div>{children}</div>

        </div>
      </div>
    </div>
  );
};

export default layout;
