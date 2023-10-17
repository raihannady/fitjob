import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

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

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy${idData}`)
      .then((res) => {
        setFetchStatus(true);
      });
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  No
                </th>
                <th scope="col" class="px-6 py-3">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Tenure
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Company
                </th>
                <th scope="col" class="px-6 py-3">
                  City
                </th>
                <th scope="col" class="px-6 py-3">
                  Salary
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data !== null &&
                data.map((res, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{res.title}</td>
                    <td className="px-6 py-4">{res.job_type}</td>
                    <td className="px-6 py-4">{res.job_tenure}</td>
                    <td className="px-6 py-4">{res.job_status}</td>
                    <td className="px-6 py-4">{res.company_name}</td>
                    <td className="px-6 py-4">{res.company_city}</td>
                    <td className="px-6 py-4">
                      {res.salary_min} - {res.salary_max}
                    </td>
                    <td class="px-6 py-3 inline-flex">
                      <button
                        onClick={handleDelete}
                        value={res.id}
                        type="button"
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Datatable;
