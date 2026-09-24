
import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Header */}
      <div className="relative h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute -bottom-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-white text-2xl font-bold uppercase text-indigo-600 shadow-md">
          {user?.userName?.charAt(0)}
        </div>
      </div>

      {/* User Info */}
      <div className="px-6 pb-6 pt-14 text-center">
        <h2 className="text-2xl font-bold capitalize text-gray-800">
          {user?.userName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {user?.email}
        </p>

        {/* Details */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="text-xs font-medium text-gray-400">
              Age
            </p>
            <p className="mt-1 text-lg font-semibold text-gray-800">
              {user?.age}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3">
            <p className="text-xs font-medium text-gray-400">
              Status
            </p>

            <span
              className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                user?.isVerified
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {user?.isVerified ? "Verified" : "Unverified"}
            </span>
          </div>
        </div>

        {/* User ID */}
        <div className="mt-4 rounded-xl bg-gray-50 p-3 text-left">
          <p className="text-xs font-medium text-gray-400">
            User ID
          </p>

          <p className="mt-1 truncate text-sm font-medium text-gray-700">
            {user?._id}
          </p>
        </div>

        {/* Button */}
        <button
          className="mt-5 w-full rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;