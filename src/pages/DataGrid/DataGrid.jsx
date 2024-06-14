// import React, { useMemo, useEffect, useState } from 'react';
// import MaterialReactTable from 'material-react-table';
// import { fetchUserDataFromFirebase } from "../../data/index";

// import './DataGrid.css';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const DataGrid = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     const unsubscribe = fetchUserDataFromFirebase((fetchedUserData) => {
//       setUserData(fetchedUserData);
//     });

//     return () => {
//       // Unsubscribe when the component unmounts
//       unsubscribe();
//     };
//   }, []);

//   const columns = useMemo(() => [
//     {
//       accessorKey: 'name',
//       header: 'Name',
//       renderCell: (rowData) => `${rowData.name.firstName} ${rowData.name.lastName}`,
//     },
//     {
//       accessorKey: 'address',
//       header: 'Address',
//     },
//     {
//       accessorKey: 'age',
//       header: 'Age',
//     },
//     {
//       accessorKey: 'date',
//       header: 'Date',
//     },
//     {
//       accessorKey: 'email',
//       header: 'Email',
//     },
//     {
//       accessorKey: 'query',
//       header: 'Query',
//     },
//     {
//       accessorKey: 'time',
//       header: 'Time',
//     },
//   ], []);

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode: 'dark',
//         },
//       }),
//     []
//   );

//   return (
//     <div className="table-container">
//       <ThemeProvider theme={theme}>
//         <MaterialReactTable columns={columns} data={userData} />
//       </ThemeProvider>
//     </div>
//   );
// };

// export default DataGrid;



import React, { useMemo, useEffect, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { fetchUserDataFromFirebase } from "../../data/index";

import './DataGrid.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DataGrid = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchUserDataFromFirebase((fetchedUserData) => {
      console.log(fetchedUserData); 
      setUserData(fetchedUserData);
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);

  const columns = useMemo(() => [
    {
      accessorKey: 'Name',
      header: 'Name',
    },
    {
      accessorKey: 'Address',
      header: 'Address',
    },
    {
      accessorKey: 'Age',
      header: 'Age',
    },
    {
      accessorKey: 'Date',
      header: 'Date',
    },
    {
      accessorKey: 'Email',
      header: 'Email',
    },
    {
      accessorKey: 'Query',
      header: 'Query',
    },
    {
      accessorKey: 'Time',
      header: 'Time',
    },
  ], []);
  

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    []
  );

  return (
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <MaterialReactTable columns={columns} data={userData} />
      </ThemeProvider>
    </div>
  );
};

export default DataGrid;
