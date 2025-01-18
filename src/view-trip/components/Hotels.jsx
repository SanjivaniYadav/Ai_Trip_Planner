import { Link } from "react-router";

const cleanField = (field) => {
  if (!field) return "Not Available";

  // Clean hotel name with structure "Hotel Name X (Example: Hotel Name main content)"
  // Remove "Hotel Name X" part and take only the main content inside the parentheses
  if (field.match(/Hotel\s+Name\s*\d+\s*\(Example:\s*(.*?)\)/i)) {
    return field
      .replace(/Hotel\s+Name\s*\d+\s*\(Example:\s*(.*?)\)/i, "$1")
      .trim();
  }

  // Clean address structure like "Address X (Example: ...)"
  return field
    .replace(/Address\s*\d+\s*\(Example:\s*(.*?)\)/i, "$1") // Clean address structure
    .replace(/placeholder\s*-\s*/i, "") // Remove "placeholder -"
    .trim();
};

function Hotels({ trip }) {
  return (
    <div className="p-6 bg-gray-100">
      {/* Section Title */}
      <h2 className="font-semibold text-2xl text-gray-700 mb-6">
        Hotel Recommendations
      </h2>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trip?.tripData?.hotels?.map((hotel, index) => (
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              cleanField(hotel?.hotelName) +
              "," +
              cleanField(hotel?.hotelAddress)
            }
            target="_blank"
            key={index}
          >
            <div className="bg-white rounded-lg border shadow-sm p-4 transform transition-transform hover:scale-105 hover:shadow-lg">
              {/* Hotel Image */}
              <div className="relative mb-4">
                <img
                  src={hotel?.image || "/travelplanner.jpg"}
                  alt={hotel?.hotelName || "Hotel Image"}
                  className="w-full h-32 object-cover rounded"
                />
              </div>

              {/* Hotel Details */}
              <div>
                {/* Hotel Name (Cleaned) */}
                <h3 className="font-medium text-xl text-gray-800 mb-2">
                  {cleanField(hotel?.hotelName)}
                </h3>

                {/* Hotel Address (Cleaned) */}
                <p className="text-gray-600 text-sm mb-2">
                  📍 {cleanField(hotel?.hotelAddress)}
                </p>

                {/* Price */}
                <p className="text-gray-700 text-sm mb-2">
                  💰 {cleanField(hotel?.price)}
                </p>

                {/* Rating */}
                <p className="text-yellow-500 text-sm mb-4">
                  ⭐ {cleanField(hotel?.rating)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
