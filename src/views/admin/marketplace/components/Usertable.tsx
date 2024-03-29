import React, { useCallback, useState, useMemo, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import axios from "axios";
import { getuserData } from "API/userdetails";
import { deleteUser } from "API/userdelete";
import { verifyUser } from "API/userVerify";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { AdduserModal } from "./AdduserModal";
import Editpage from "./editpage";
import { useNavigate } from "react-router-dom";
import { MdEdit, MdCheck } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

function Usertable() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [userlist, setuserlist] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(500);
  const [searchCriteria, setSearchCriteria] = useState("full_name");
  const [edituserId, setEdituserId] = useState("");
  const [userVerified, setUserVerified] = useState(false);
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
      const confirmation = window.confirm(
        "Are you sure you want to delete this user?"
      );

      if (confirmation) {
        await deleteUser(userObjectId);
        getuserDetails();
      } else {
        console.log("User cancelled deletion.");
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  const handleVerifyClick = async (userObjectId: any, isVerified: boolean) => {
    try {
      const verifyconfirmation = window.confirm(
        "Are you sure you want to the change user verified status ?"
      );

      if (verifyconfirmation) {
        // setUserVerified(!userVerified);

        await verifyUser(userObjectId, !isVerified);
        getuserDetails();
      } else {
        console.log("Cancelled the process .");
      }
    } catch (error) {
      console.error("Error changing status", error);
    }
  };
  const verifyUserButton = (params: ICellRendererParams) => {
    const userId = params.data._id;
    const isVerified = params.data.is_verified;
    setUserVerified(isVerified);
    const verfifyColor = isVerified ? "bg-green-300" : "bg-red-300";

    return (
      <div className="flex items-center justify-center">
        <button
          className={`${verfifyColor} mt-2 rounded-full px-2 py-2  text-sm text-blue-900`}
          onClick={() => {
            handleVerifyClick(userId, isVerified);
          }}
        >
          <MdCheck />
        </button>
      </div>
    );
  };

  const renderActionButtons = (params: ICellRendererParams) => {
    const userId = params.data._id;
    setEdituserId(userId);
    const phoneNumber = params.data.mobile;
    // setSelectedUserDetails(params.data)

    return (
      <div className="mt-1 flex items-center">
        <button
          className="ml-2 rounded-md bg-gray-300 px-2 py-2 text-sm text-blue-900"
          onClick={() => handleEditClick(phoneNumber)}
        >
          <FaEye />
        </button>

        <button
          className="ml-2 w-2/3 rounded-md bg-blue-600 px-2 py-2 text-sm text-white"
          onClick={() => handleEditClick(phoneNumber)}
        >
          <MdEdit />
        </button>
        <button
          className="ml-2 rounded-md bg-red-600 px-2 py-2 text-sm text-white"
          onClick={() => handleDeleteClick(userId)}
        >
          <IoTrashOutline />
        </button>
        <a
          href={`tel:${phoneNumber}`}
          className="ml-2 flex gap-2 rounded-md bg-blue-500 px-2 text-white"
        >
          <svg
            data-slot="icon"
            fill="none"
            className="m-2 h-5 w-5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            ></path>
          </svg>
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
    {
      field: "isVerified",
      headerName: "Verification Status",
      cellRenderer: verifyUserButton,
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
      // const response = await axios.get(`http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/search-user-admin?mobile=${phoneNumber}`); // Replace with the actual API endpoint to fetch user details
      // setSelectedUserDetails(response.data.result[0]);
      // console.log("------------->");
      navigate(`/admin/tabs/${phoneNumber}`);
      // openModal2();
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
