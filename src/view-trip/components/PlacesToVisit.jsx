import React from "react";
import { Link } from "react-router";

const cleanField = (field) => {
  if (!field) return "Not Available";

  // Clean placeholder text
  if (field.match(/Placeholder\s*-\s*(.*)/i)) {
    return field.replace(/Placeholder\s*-\s*/i, "").trim();
  }

  return field.trim();
};

function PlacesToVisit({ trip }) {
  return (
    <div className="p-6 bg-gray-100">
      {/* Section Title */}
      <h2 className="font-semibold text-2xl text-gray-700 mb-6">
        Places To Visit
      </h2>

      {/* Itinerary Grid */}
      <div className="space-y-8">
  {trip?.tripData?.itinerary &&
    Object.entries(trip.tripData.itinerary).map(([day, places], index) => (
      <div key={index} className="bg-white rounded-lg shadow-md p-6">
        {/* Day Title */}
        <h3 className="font-medium text-xl text-gray-800 mb-4">{day}</h3>

        {/* Places Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, placeIndex) => (
            <Link
              to={
                place.geoCoordinates
                ? `https://www.google.com/maps/search/?api=1&query=${place.geoCoordinates.lat},${place.geoCoordinates.lng}(${encodeURIComponent(place.placeName)})`
                : "#"
              }
              target="_blank"
              key={placeIndex}
            >
              <div className="bg-gray-50 rounded-lg border shadow-sm p-4 transform transition-transform hover:scale-105 hover:shadow-lg">
                {/* Place Image */}
                <div className="relative mb-4">
                  <img
                    src={
                      place.placeImageUrl ===
                      "Placeholder - Search on Google Images"
                        ? "/travelplanner.jpg"
                        : place.placeImageUrl
                    }
                    alt={cleanField(place.placeName)}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>

                {/* Place Details */}
                <div>
                  {/* Place Name */}
                  <h4 className="font-medium text-lg text-gray-800 mb-2">
                    {cleanField(place.placeName)}
                  </h4>

                  {/* Place Details */}
                  <p className="text-gray-600 text-sm mb-2">
                    📝 {cleanField(place.placeDetails)}
                  </p>

                  {/* Travel Time */}
                  <p className="text-gray-700 text-sm mb-2">
                    ⏳ Travel Time: {cleanField(place.travelTime)}
                  </p>

                  {/* Ticket Pricing */}
                  <p className="text-gray-700 text-sm mb-2">
                    💰 Ticket Pricing: {cleanField(place.ticketPricing)}
                  </p>

                  {/* Rating */}
                  <p className="text-yellow-500 text-sm">
                    ⭐ Rating: {cleanField(place.rating)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    ))}
</div>

    </div>
  );
}

export default PlacesToVisit;
