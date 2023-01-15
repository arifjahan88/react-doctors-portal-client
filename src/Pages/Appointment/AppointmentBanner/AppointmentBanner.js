import banner from "../../../assets/images/appointment-banner.jpg";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setselectedDate }) => {
  return (
    <header>
      <div className="hero lg:p-24">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly w-full">
          <img
            alt=""
            src={banner}
            className="w-2/4 rounded-2xl opacity-80 shadow-2xl"
          />
          <div className="drop-shadow-2xl bg-gray-50 p-4 rounded-lg">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setselectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
