/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../../../components/navbar/Navbar";
import { Divider } from "@mui/material";
import { useAppSelector } from "../../../utils/redux/hooks";
import { GetUserInfoDataFirebase } from "../../../firebase/hooks";
import { useEffect, useState } from "react";
const StudentProfile = () => {
  const { studentIdRedux } = useAppSelector((state) => state.user);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUserInfoDataFirebase(studentIdRedux);
      setUserData(data);
    };

    fetchData();
  }, [studentIdRedux]);
  // console.log(userData);
  return (
    <>
      <Navbar />
      <div className="flex justify-center px-5 py-10">
        <div className="flex w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-9/12 hover:bg-gray-100 rounded-2xl">
          <div className="w-full text-FontMainColor font-JetBrains">
            <h1 className="text-2xl font-bold tracking-wider lg:text-4xl sm:text-2xl">
              My Profile
            </h1>
            <div className="py-3">
              <Divider />
            </div>

            <form className="py-5">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-center lg:text-4xl">
                  {userData?.firstName} {userData?.lastName}
                </p>
                <p className="text-base font-medium text-center">
                  {userData?.studentId}
                </p>

                <Divider
                  sx={{
                    margin: "2rem 0",
                    backgroundColor: "#ffee58", // Change this color code to your preferred color
                  }}
                />
              </div>

              <p className="mt-2 text-sm font-medium text-center md:text-lg">
                {userData?.course}
              </p>

              <p className="mb-5 text-sm font-medium text-center md:text-lg">
                STI College Pasay-EDSA
              </p>

              <div className="space-y-1">
                <p className="text-sm font-medium text-center md:text-sm">
                  OTHER INFORMATION
                </p>

                <div className="flex items-center justify-center text-sm font-medium text-center text-gray-600 md:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    className="w-4 h-4 mr-1"
                  >
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>{userData?.email}</span>
                </div>

                <div className="flex items-center justify-center text-sm font-medium text-center text-gray-600 md:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <span>{userData?.phoneNumber}</span>
                </div>

                <div className="flex items-center justify-center text-sm font-medium text-center text-gray-600 md:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>

                  <span> {userData?.birthday}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
