// Component3.js

import { useStore } from '../stores/dateStore';
import { format } from "date-fns";

export default function Component3() {
    const { selectedDate } = useStore();

    return (
        <div>
            <h2>Component 3</h2>
            <p>Selected date: {format(selectedDate, "dd-MM-yyyy")}</p>
        </div>
    );
}
