// Component2.js

import { useStore } from "../stores/dateStore";
import { useEffect } from "react";
import { format } from "date-fns";

export default function Component2() {
  const { selectedDate, fetchData, data } = useStore();

  useEffect(() => {
    fetchData(selectedDate).then();
  }, [selectedDate]);

  console.log("data", data);
  return (
    <div>
      <h2>Component 2</h2>
      <p>Selected date: {format(selectedDate, "dd-MM-yyyy")}</p>

      {data ? (
        <ul>
          {data?.items?.map((item) => (
            <li key={item.id}>
              Order Date : {item.dateAdded} - {item.name}{" "}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
