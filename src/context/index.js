import { createContext, useState } from "react";

const tableData = [
  {
    id: 1,
    department: "Management Team",
    access: "All Access",
    noOfMembers: 4,
    lastUpdated: "1 min Ago",
  },
  {
    id: 2,
    department: "Procurement Team",
    access: "Restricted Access",
    noOfMembers: 8,
    lastUpdated: "1 min Ago",
  },
  {
    id: 3,
    department: "Project Team",
    access: "Restricted Access",
    noOfMembers: 16,
    lastUpdated: "1 min Ago",
  },
  {
    id: 4,
    department: "IT Team",
    access: "Restricted Access",
    noOfMembers: 4,
    lastUpdated: "1 min Ago",
  },
  {
    id: 5,
    department: "Super Admin",
    access: "All Access",
    noOfMembers: 1,
    lastUpdated: "1 min Ago",
  },
];

let initialData = {
  data: tableData,
  selectedRow: tableData[0],
};

const TableContext = createContext({
  data: tableData,
  selectedRow: tableData[0],
});

const TableDataProvider = ({ children }) => {
  let [state, setState] = useState(initialData);
  return (
    <TableContext.Provider
      value={{
        data: state.data,
        selectedRow: state.selectedRow,
        selectRow: (id) => {
          setState((prev) => {
            return {
              data: prev.data,
              selectedRow: prev.data.find((d) => d.id === id),
            };
          });
        },
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export { TableContext };
export default TableDataProvider;
