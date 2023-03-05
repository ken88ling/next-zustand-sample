import { useStore } from "../stores/dateStore";
import Datepicker from "../components/Datepicker";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import Component3 from "../components/Component3";

export default function Home() {
  const { selectedDate, setSelectedDate } = useStore();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>My App</h1>
      <div style={{ display: "flex" }}>
        <div>
          <Component1 />
          <br />
          <Component3 />
          <br />
          <Component2 />
        </div>
        <div>
          <Datepicker
            selectedDate={selectedDate}
            onDateChange={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
}
