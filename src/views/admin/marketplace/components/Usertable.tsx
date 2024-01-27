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
  const [totalPages, setTotalPages] = useState(0);
  

  const getuserDetails = useCallback(async () => {
    try {
      // const response = await axios.get(`http://65.1.183.77:8181/api/v1/user/get-all-user-suggestion?page=${page}&limit=${limit}`);
     const response= await getuserData({page,limit})
      setuserlist(response.data.result); // Extract data array from the response
     
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
    return (
      <div className='flex items-center mt-1 '>
        <button className="bg-yellow-300 px-2 rounded-md ml-2 text-gray-800" >
          Edit
        </button>
        <button className="bg-gray-800 px-2 rounded-md ml-2 text-white " onClick={() => handleDeleteClick(userId)} >
          Delete
        </button>
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
    
    { field: "gender",headerName:"Gender" },
    { field: "updatedAt", headerName:"Last active time" },
    {
      field: "Action",
      cellRenderer: renderActionButtons,
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

  const handleSearchClick = () => {
    updateFilteredData();
  };

  const handleResetClick = () => {
    setSearchTerm('');
    updateFilteredData();
  };

  const handlePageChange = (newPage: any) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
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
        <button className='bg-blue-700 p-2 rounded-md ml-2 text-white' onClick={handleSearchClick}>Search</button>
        <button className='bg-blue-700 p-2 rounded-md ml-2 text-white' onClick={handleResetClick}>Reset</button>
      </div>
      <div className="download-btn flex justify-between items-center">
        <button className='bg-green-500 p-2 rounded-md ml-2 mb-2 text-white' onClick={downloadCsv}>Download data</button>
        <button className='bg-green-500 p-2 rounded-md ml-2 mb-2 text-white'>Create user</button>
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
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
        <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>Next</button>
        <select value={limit} onChange={(e) => handleLimitChange(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
  );
}

export default Usertable;