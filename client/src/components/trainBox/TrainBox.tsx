import useTrainDetails from "../../hooks/useTrainDetails";
import "./trainBox.scss";

const List = () => {
  const { data: trainDetails } = useTrainDetails();

  return (
    <div id="slist">
      <div id="title">
        <img src="trainSchedule.svg" alt="" />
        <div id="title">
          <span>Train Arrivals</span>
        </div>
      </div>
      <div id="listItems">
        {trainDetails &&
          trainDetails.map((d) => (
            <div key={d.id} id="listItem">
              <span>{d.ArrivalCity}</span>
              <span>{new Date(d.ArrivalTime).toLocaleDateString()}</span>
              <span>{new Date(d.ArrivalTime).toLocaleTimeString()}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
