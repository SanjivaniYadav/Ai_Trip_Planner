import PropTypes from "prop-types";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src="/travelplanner.jpg"
        alt="Travel Planner"
        className="h-[340px] w-full object-cover"
      />

      <div className="flex flex-wrap justify-between items-center p-6 gap-4 bg-white shadow-md rounded-xl">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Location Title */}
            <h2 className="font-extrabold text-3xl text-gray-800 tracking-wide capitalize mb-4">
              {trip?.userSelection?.location?.label || "Your Destination"}
            </h2>

            {/* Button Section */}
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white font-bold text-lg rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
              <IoIosSend className="text-2xl" />
            </button>
          </div>

          {/* Details Section */}
          <div className="flex flex-wrap gap-4 mt-4">
            {/* Days */}
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl text-blue-600">📅</span>
              <p className="text-gray-700 text-lg font-medium">
                {trip?.userSelection?.noOfDays || "0"}{" "}
                {trip?.userSelection?.noOfDays === "1" ? "Day" : "Days"}
              </p>
            </div>

            {/* Budget */}
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl text-green-600">💰</span>
              <p className="text-gray-700 text-lg font-medium">
                {trip?.userSelection?.budget || "No Budget Specified"}
              </p>
            </div>

            {/* Travelers */}
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full shadow-sm">
              <span className="text-xl text-purple-600">🥂</span>
              <p className="text-gray-700 text-lg font-medium">
                No. of Travelers: {trip?.userSelection?.traveler || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        {/* <div className="flex justify-end items-center">
          <button className="flex items-center px-3 py-2 bg-blue-600 text-white font-bold text-lg rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            <IoIosSend className="text-2xl" />
          </button> */}
        {/* </div> */}
      </div>
    </div>
  );
}

InfoSection.propTypes = {
  trip: PropTypes.shape({
    userSelection: PropTypes.shape({
      location: PropTypes.shape({
        label: PropTypes.string.isRequired,
      }),
      noOfDays: PropTypes.number.isRequired,
      budget: PropTypes.string.isRequired,
      traveler: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default InfoSection;
