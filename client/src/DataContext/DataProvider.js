import React, { createContext, useContext, useState } from "react";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [showTeacherBox, setShowTeacherBox] = useState(false);
  const [availableTeachers, setAvailableTeachers] = useState([]);
  const [classHistoryList, setClassHistoryList] = useState();

  return (
    <DataContext.Provider
      value={{
        showTeacherBox,
        setShowTeacherBox,
        availableTeachers,
        setAvailableTeachers,
        classHistoryList,
        setClassHistoryList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export const DataState = () => {
  return useContext(DataContext);
};

export default DataProvider;
