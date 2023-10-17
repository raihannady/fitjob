import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";

const Jobs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section id="vacancy" className="bg-white p-20">
      <div>
        <h1 className="text-6xl text-grey-900 text-center pb-20">
          Jobs Vacancy
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {data !== null &&
          data.map((res) => (
            <div
              key={res.id}
              className="flex items-center bg-white border-2 border-black rounded-lg shadow"
            >
              <div className="flex-1">
                <img
                  className="rounded-t-lg object-contain h-40 w-full p-5"
                  src={res.company_image_url}
                  alt="company_img"
                />
              </div>

              <div className="flex-1 p-5 bg-gray-800 rounded-r-md h-full">
                <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                  {res.title}
                </h5>
                <h5 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
                  {res.company_name} &nbsp;{" "}
                  <VerifiedIcon className="text-blue-500" />
                </h5>
                <h5 className="text-xs mb-2 tracking-tight text-gray-900 dark:text-white">
                  <LocationOnOutlinedIcon /> &nbsp;
                  {res.company_city}
                </h5>
                <h5 className="text-xs mb-2 tracking-tight text-gray-900 dark:text-white">
                  <WorkOutlineIcon /> &nbsp;
                  {res.job_type}
                </h5>

                <Link
                  to={`/about/${res.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={scrollToTop}
                >
                  Detail
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Jobs;
