import useEmployeeType from "../../hooks/useEmployeeType";
import "./list.scss";

const List = () => {
  const storeManagers = useEmployeeType("Store Manager");

  return (
    <div id="slist">
      <div id="title">
        <img src="storeManagers.svg" alt="" />
        <div id="title">
          <span>Store Managers</span>
        </div>
      </div>
      <div id="listItems">
        {storeManagers &&
          storeManagers.map((manager) => (
            <div key={manager.id} id="listItem">
              <span>{manager.name}</span>
              <span>{manager.PhoneNumber}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
