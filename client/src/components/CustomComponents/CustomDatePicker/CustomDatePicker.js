import styles from './styles.module.css'
import DatePicker from 'react-datepicker'



const CustomDatePicker = ({ startDate, setStartDate, endDate, setEndDate, onChangePicker }) => {


  return (
    <div className={styles.datePickerContainer}>
      <p>Start date</p>
      <DatePicker
        onCalendarClose={onChangePicker}
        selected={startDate}
        className={styles.datePicker}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat='MM/yyyy'
        showMonthYearPicker
      />
      <p>End date (or expected)</p>
      <DatePicker
        onCalendarClose={onChangePicker}
        selected={endDate}
        className={styles.datePicker}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat='MM/yyyy'
        showMonthYearPicker
      />
    </div>
  );

}

export default CustomDatePicker;