import React from "react";
import useEmployees from "./useEmployees";

const useEmployeeType = (type: string) => {
  const { data: employees } = useEmployees();
  return employees?.filter((e) => e.Type === type);
};

export default useEmployeeType;
