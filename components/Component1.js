// Component1.js

import { useStore } from "../stores/dateStore";
import { format } from "date-fns";

export default function Component1() {
  const { selectedDate } = useStore();

  return (
    <div>
      <h2>Component 1</h2>
      <p>Selected date: {format(selectedDate, "dd-MM-yyyy")}</p>
    </div>
  );
}
