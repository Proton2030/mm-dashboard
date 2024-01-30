import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import axios from 'axios';
import { getuserData } from 'API/userdetails';
import { deleteUser } from 'API/userdelete';


function Usertable() {

  const [searchTerm, setSearchTerm] = useState('');
  const [userlist, setuserlist] = useState([]);
  const [filteredData, setfilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(500);
  const [searchCriteria, setSearchCriteria] = useState('full_name');
  const [copiedNumber, setCopiedNumber] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = (number:any) => {
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
     const response= await getuserData({page,limit})
      setuserlist(response.data.result); // Extract data array from the response
      // setTotalPages(Math.ceil(response.data.total / limit));
      console.log(response.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [setuserlist, page, limit]);


  const handleDeleteClick = async ( userObjectId:any ) => {
    try {
      await deleteUser(userObjectId);
      getuserDetails();
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };
  

  const renderActionButtons = (params: ICellRendererParams) => {
    const userId = params.data._id;
    const phoneNumber = params.data.mobile;

    return (
      <div className='flex items-center mt-1'>
        <button className="bg-yellow-300 px-2 rounded-md ml-2 text-gray-800">
          Edit
        </button>
        <button className="bg-gray-800 px-2 rounded-md ml-2 text-white" onClick={() => handleDeleteClick(userId)}>
          Delete
        </button>
        <button className="bg-blue-500 px-2 rounded-md ml-2 text-white" onClick={() => copyToClipboard(phoneNumber)}>
          Copy phno.
        </button>
        {showAlert && (
          <div className="absolute top-0 right-0 m-2 p-2 bg-green-400 text-white rounded-md">
            Copied: {copiedNumber}
            <button className="ml-2" onClick={closeAlert}>
              X
            </button>
          </div>
        )}
      </div>
    );
  };

  const gridOptions = {
    getRowHeight: () => 50,
  };

  const [colDefs, setColDefs] = useState([
    { field: "full_name",headerName:"Name", filter: "agTextColumnFilter" },
    { field: "mobile", headerName:"Mobile no" },
    { field: "status",
      cellRenderer: (params: ICellRendererParams) => {
        const activetext = params.value==="ACTIVE" ? "Active" : "Nonactive";
        const textcolour = params.value==="ACTIVE" ? 'text-green-400' : 'text-red-500';
        return (
          <div className='flex justify-evenly items-center mt-1'>
            <div className={`activetext ${textcolour} font-bold`}>{activetext}</div>
          </div>
        );
      }
    },
    {field: "message_limit", headerName:"Message Limit"},
    { field: "gender",headerName:"Gender" },
    { field: "updatedAt", headerName:"Last active time" },
    {
      field: "Action",
      cellRenderer: renderActionButtons,
    },
    {
      field:"message_limit", headerName:"Message limit"
    }
  ]);

  const defaultColDef: ColDef = useMemo(() => ({
    filter: true,
    filterParams: {
      buttons: ['apply', 'clear', 'cancel', 'reset']
    },
    headerClass: "text-sm font-bold text-gray-600 dark:text-white border-b border-gray-200 "
  }), []);

  const updateFilteredData = () => {
    const filtered = userlist.filter((item) =>
      Object.values(item).some((value) => String(value).toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setfilteredData(filtered);
  };

  const handleSearchClick = async () => {
    try {
      if (searchTerm.trim() !== '') {
        const searchTermEncoded = encodeURIComponent(searchTerm);

        const searchEndpoint = `http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/search-user-admin?${searchCriteria}=${searchTermEncoded}`;

        const response = await axios.get(searchEndpoint);
        setfilteredData(response.data.result);
      }
    } catch (error) {
      console.error('Error searching user', error);
    }
  };
  
  

  const handleResetClick = () => {
    setSearchTerm('');
    updateFilteredData();
  };

  const handlePageChange = (newPage: any) => {
    const parsedPage = Number(newPage); // Convert to number
    if (!isNaN(parsedPage) && parsedPage > 0 && parsedPage <= totalPages) {
      setPage(parsedPage);
    }
  };
  
  const handleLimitChange = (newLimit: any) => {
    setLimit(newLimit);
    setPage(1);
  };

  const downloadCsv = () => {
    const csvContent = 'data:text/csv;charset=utf-8,' + encodeURIComponent(generateCsvContent());
    const link = document.createElement('a');
    link.href = csvContent;
    link.target = '_blank';
    link.download = 'table_data.csv';
    link.click();
  };

  const generateCsvContent = () => {
    if (!filteredData || filteredData.length === 0) {
      return '';
    }
    const headers = Object.keys(filteredData[0]).join(',');
    const rows = filteredData.map((item) => Object.values(item).join(','));
    return `${headers}\n ${rows.join('\n')}`;
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
    <div className='mt-2'>
      <div className='p-2'>
        <input
          className='p-2 border-black border-2 rounded-xl mt-2 mb-3 w-3/6'
          type="text"
          placeholder="Search here"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={searchCriteria}
          onChange={e => setSearchCriteria(e.target.value)}
          className='p-2 border-black border-2 rounded-xl mt-2 mb-3 ml-2'
        >
          <option value="full_name">Full Name</option>
          <option value="mobile">Mobile</option>
          <option value="age">Age</option>
        </select>
        <button className='bg-blue-700 p-2 rounded-md ml-2 text-white' onClick={handleSearchClick}>Search</button>
        <button className='bg-blue-700 p-2 rounded-md ml-2 text-white' onClick={handleResetClick}>Reset</button>
      </div>
      <div className="ag-theme-alpine rounded-xl" style={{ height: 300, width: '100%' }}>
        <AgGridReact
          rowData={filteredData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
        />
      </div>
      <div className="pagination">
        <span>Page: {page} of {totalPages}</span>
        <button className='bg-blue-500 cursor-pointer p-2 rounded-md ml-2 mt-2 text-white' onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
        <button   className='bg-blue-500 cursor-pointer p-2 rounded-md ml-2 mt-2 text-white' onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next</button>
        <select value={limit} className='ml-2 mt-2' onChange={(e) => handleLimitChange(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>
    </div>
  );
}

export default Usertable;
