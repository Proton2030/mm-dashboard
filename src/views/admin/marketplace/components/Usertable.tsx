import React, { useCallback, useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import axios from "axios";
import { getuserData } from "API/userdetails";
import { deleteUser } from "API/userdelete";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { AdduserModal } from "./AdduserModal";
import Editpage from "./editpage";

function Usertable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userlist, setuserlist] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(500);
  const [searchCriteria, setSearchCriteria] = useState("full_name");
  const [edituserId, setEdituserId] = useState("");
  const [copiedNumber, setCopiedNumber] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  let [isOpen, setIsOpen] = useState(false);
  let [isOpensecondModel, setIsOpensecondModel] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal2() {
    setIsOpensecondModel(false);
  }

  function openModal2() {
    setIsOpensecondModel(true);
  }

  const copyToClipboard = (number: any) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };

  const getuserDetails = useCallback(async () => {
    try {
      // const response = await axios.get(`http://65.1.183.77:8181/api/v1/user/get-all-user-suggestion?page=${page}&limit=${limit}`);
      const response = await getuserData({ page, limit });
      setuserlist(response.data.result); // Extract data array from the response
      // setTotalPages(Math.ceil(response.data.total / limit));
      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [setuserlist, page, limit]);

  const handleDeleteClick = async (userObjectId: any) => {
    try {
      await deleteUser(userObjectId);
      getuserDetails();
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const renderActionButtons = (params: ICellRendererParams) => {
    const userId = params.data._id;
    setEdituserId(userId);
    const phoneNumber = params.data.mobile;
    // setSelectedUserDetails(params.data)

    return (
      <div className="mt-1 flex items-center">
        <button
          className="ml-2 w-20 rounded-md bg-white text-sm text-blue-900"
          onClick={() => handleEditClick(phoneNumber)}
        >
          <svg
            className="mx-1 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
            />
            <path
              stroke="currentColor"
              stroke-width="2"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          View
        </button>

        <button
          className="text-sm w-2/3 ml-2 rounded-md bg-blue-600 px-2 text-white"
          onClick={() => handleEditClick(phoneNumber)}
        >
          <svg
            className="h-[20px] w-[20px] ml-1 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M11.3 6.2H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h11c1.1 0 2-1 2-2.1V11l-4 4.2c-.3.3-.7.6-1.2.7l-2.7.6c-1.7.3-3.3-1.3-3-3.1l.6-2.9c.1-.5.4-1 .7-1.3l3-3.1Z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M19.8 4.3a2.1 2.1 0 0 0-1-1.1 2 2 0 0 0-2.2.4l-.6.6 2.9 3 .5-.6a2.1 2.1 0 0 0 .6-1.5c0-.2 0-.5-.2-.8Zm-2.4 4.4-2.8-3-4.8 5-.1.3-.7 3c0 .3.3.7.6.6l2.7-.6.3-.1 4.7-5Z"
              clip-rule="evenodd"
            />
          </svg>
          Edit
        </button>
        <button
          className="text-sm ml-2 rounded-md bg-red-600 px-2 text-white"
          onClick={() => handleDeleteClick(userId)}
        >
          <svg className="w-[20px] h-[20px] ml-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
        <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
      </svg>
          Delete
        </button>
        <a
          href={`tel:${phoneNumber}`}
          className="ml-2 rounded-md bg-blue-500 px-2 text-white"
        >
          Copy phno.
        </a>
        {/* {showAlert && (
          <div className="absolute top-0 right-0 m-2 p-2 bg-green-400 text-white rounded-md">
            Copied: {copiedNumber}
            <button className="ml-2" onClick={closeAlert}>
              X
            </button>
          </div>
        )} */}
      </div>
    );
  };

  const gridOptions = {
    getRowHeight: () => 50,
  };

  const [colDefs, setColDefs] = useState([
    {
      field: "profile image",
      cellRenderer: (params: ICellRendererParams) => {
        const imageUrl = params.data.profile_image_url;
        console.log(imageUrl); // Update with the actual field name for the profile image
        return (
          <img
            src={imageUrl}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        );
      },
    },

    { field: "full_name", headerName: "Name", filter: "agTextColumnFilter" },

    {
      field: "status",
      cellRenderer: (params: ICellRendererParams) => {
        const activetext = params.value === "ACTIVE" ? "Active" : "Nonactive";
        const textcolour =
          params.value === "ACTIVE" ? "text-green-400" : "text-red-500";
        return (
          <div className="mt-1 flex items-center justify-evenly">
            <div className={`activetext ${textcolour} font-bold`}>
              {activetext}
            </div>
          </div>
        );
      },
    },
    { field: "mobile", headerName: "Mobile Number" },
    { field: "gender", headerName: "Gender" },
    {
      field: "message_limit",
      headerName: "Message limit",
    },
    { field: "updatedAt", headerName: "Last active time" },
    {
      field: "Action",
      cellRenderer: renderActionButtons,
    },
  ]);

  const defaultColDef: ColDef = useMemo(
    () => ({
      filter: true,
      filterParams: {
        buttons: ["apply", "clear", "cancel", "reset"],
      },
      headerClass:
        "text-sm font-bold text-gray-600 dark:text-white border-b border-gray-200 ",
    }),
    []
  );

  const updateFilteredData = () => {
    const filtered = userlist.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setfilteredData(filtered);
  };

  const handleSearchClick = async () => {
    try {
      if (searchTerm.trim() !== "") {
        const searchTermEncoded = encodeURIComponent(searchTerm);

        const searchEndpoint = `http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/search-user-admin?${searchCriteria}=${searchTermEncoded}`;

        const response = await axios.get(searchEndpoint);
        setfilteredData(response.data.result);
      }
    } catch (error) {
      console.error("Error searching user", error);
    }
  };

  const handleEditClick = async (phoneNumber: string) => {
    try {
      const response = await axios.get(
        `http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/search-user-admin?mobile=${phoneNumber}`
      ); // Replace with the actual API endpoint to fetch user details
      setSelectedUserDetails(response.data.result[0]);
      console.log("------------->");

      openModal2();
    } catch (error) {
      console.error("Error fetching user details", error);
    }
  };

  const handleResetClick = () => {
    setSearchTerm("");
    updateFilteredData();
  };

  const handlePageChange = (newPage: any) => {
    const parsedPage = Number(newPage);
    if (!isNaN(parsedPage) && parsedPage > 0 && parsedPage <= totalPages) {
      setPage(parsedPage);
    }
  };

  const handleLimitChange = (newLimit: any) => {
    setLimit(newLimit);
    setPage(1);
  };

  const downloadCsv = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," + encodeURIComponent(generateCsvContent());
    const link = document.createElement("a");
    link.href = csvContent;
    link.target = "_blank";
    link.download = "table_data.csv";
    link.click();
  };

  const generateCsvContent = () => {
    if (!filteredData || filteredData.length === 0) {
      return "";
    }
    const headers = Object.keys(filteredData[0]).join(",");
    const rows = filteredData.map((item) => Object.values(item).join(","));
    return `${headers}\n ${rows.join("\n")}`;
  };

  useEffect(() => {
    getuserDetails();
  }, [getuserDetails, page, limit]);

  useEffect(() => {
    if (userlist) {
      updateFilteredData();
    }
  }, [userlist, searchTerm]);

  return (
    <div className="mt-2">
      <div className="p-2">
        <input
          className="border-black mb-3 mt-2 w-3/6 rounded-xl border-2 p-2"
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={searchCriteria}
          onChange={(e) => setSearchCriteria(e.target.value)}
          className="border-black mb-3 ml-2 mt-2 rounded-xl border-2 p-2"
        >
          <option value="full_name">Full Name</option>
          <option value="mobile">Mobile</option>
          <option value="age">Age</option>
        </select>
        <button
          className="ml-2 rounded-md bg-blue-700 p-2 text-white"
          onClick={handleSearchClick}
        >
          Search
        </button>
        <button
          className="ml-2 rounded-md bg-blue-700 p-2 text-white"
          onClick={handleResetClick}
        >
          Reset
        </button>
        <button
          className="ml-2 rounded-md bg-blue-700 p-2 text-white"
          onClick={openModal}
        >
          Add user
        </button>
      </div>
      <div
        className="ag-theme-alpine rounded-xl"
        style={{ height: 300, width: "100%" }}
      >
        <AgGridReact
          rowData={filteredData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
        />
      </div>
      <div className="pagination">
        <span>
          Page: {page} of {totalPages}
        </span>
        <button
          className="ml-2 mt-2 cursor-pointer rounded-md bg-blue-500 p-2 text-white"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="ml-2 mt-2 cursor-pointer rounded-md bg-blue-500 p-2 text-white"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
        <select
          value={limit}
          className="ml-2 mt-2"
          onChange={(e) => handleLimitChange(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black/25 fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-screen w-full max-w-md transform overflow-hidden overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <></>
                  <AdduserModal />
                  <div
                    className=" rounded-full bg-gray-200"
                    onClick={closeModal}
                  >
                    X &nbsp;close
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpensecondModel} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal2}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black/25 fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="h-screen w-full max-w-md transform overflow-hidden overflow-y-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <></>
                  <Editpage
                    userObjectId={edituserId}
                    userDetails={selectedUserDetails}
                  />

                  <div
                    className="hover rounded-full bg-gray-200"
                    onClick={closeModal2}
                  >
                    X &nbsp;close
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Usertable;
