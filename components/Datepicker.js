// Datepicker.js

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Datepicker({ selectedDate, onDateChange }) {
    return (
        <div>
            <DatePicker selected={selectedDate} onChange={onDateChange} />
        </div>
    );
}
