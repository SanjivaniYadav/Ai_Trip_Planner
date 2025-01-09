import {
  GoogleGenerativeAI,
  // HarmCategory,
  // HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las vegas, for 3 Days for Couple with a Cheap budget, Give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itineraries with PlaceName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'I cannot directly access and display images or real-time pricing for hotels. Hotel prices are incredibly dynamic and change constantly.  Therefore, I can\'t provide image URLs or exact pricing.  I will give you the framework for a JSON response, including placeholders you can fill in using online travel agencies like Booking.com, Expedia, Kayak, etc.\n\n\n```json\n{\n  "tripDetails": {\n    "destination": "Las Vegas, NV",\n    "duration": "3 Days",\n    "travelers": "Couple",\n    "budget": "Cheap"\n  },\n  "hotels": [\n    {\n      "hotelName": "Hotel Name 1 (Example: Circus Circus)",\n      "hotelAddress": "Address 1 (Example: 2880 S Las Vegas Blvd, Las Vegas, NV 89109)",\n      "price": "Placeholder - Check Booking.com", \n      "hotelImageUrl": "Placeholder - Search on Google Images",\n      "geoCoordinates": { "lat": 36.1207, "lng": -115.1728 },\n      "rating": "Placeholder - Check Booking.com/Google Reviews",\n      "description": "Placeholder - Description from Booking.com"\n    },\n    {\n      "hotelName": "Hotel Name 2 (Example: Motel 8)",\n      "hotelAddress": "Address 2",\n      "price": "Placeholder - Check Expedia",\n      "hotelImageUrl": "Placeholder - Search on Google Images",\n      "geoCoordinates": { "lat": "Placeholder", "lng": "Placeholder" },\n      "rating": "Placeholder - Check Expedia/Google Reviews",\n      "description": "Placeholder - Description from Expedia"\n    },\n    {\n      "hotelName": "Hotel Name 3 (Example: Budget-friendly Casino Hotel)",\n      "hotelAddress": "Address 3",\n      "price": "Placeholder - Check Kayak",\n      "hotelImageUrl": "Placeholder - Search on Google Images",\n      "geoCoordinates": { "lat": "Placeholder", "lng": "Placeholder" },\n      "rating": "Placeholder - Check Kayak/Google Reviews",\n      "description": "Placeholder - Description from Kayak"\n\n    }\n  ],\n  "itinerary": {\n    "day1": [\n      {\n        "placeName": "Fremont Street Experience",\n        "placeDetails": "Free walking area with light shows",\n        "placeImageUrl": "Placeholder - Search on Google Images",\n        "geoCoordinates": { "lat": 36.1699, "lng": -115.1400 },\n        "ticketPricing": "Free",\n        "rating": "Placeholder - Check Google Reviews",\n        "travelTime": "30 minutes (walking)"\n      },\n      {\n        "placeName": "Downtown Container Park",\n        "placeDetails": "Unique shopping and dining experience",\n        "placeImageUrl": "Placeholder - Search on Google Images",\n        "geoCoordinates": { "lat": 36.1654, "lng": -115.1396 },\n        "ticketPricing": "Free entry",\n        "rating": "Placeholder - Check Google Reviews",\n        "travelTime": "15 minutes (walking)"\n      }\n    ],\n    "day2": [\n      {\n        "placeName": "Strip Walk (South)",\n        "placeDetails": "Walk the south end of the Las Vegas Strip, seeing Bellagio fountains, etc.",\n        "placeImageUrl": "Placeholder - Search on Google Images",\n        "geoCoordinates": { "lat": 36.1075, "lng": -115.1721 },  //Approximate\n        "ticketPricing": "Free",\n        "rating": "Placeholder",\n        "travelTime": "Several hours (walking)"\n      },\n      {\n        "placeName": "Free Shows (e.g., Bellagio Fountains)",\n        "placeDetails": "Enjoy free shows along the Strip",\n        "placeImageUrl": "Placeholder - Search on Google Images",\n        "geoCoordinates": { "lat": "Placeholder", "lng": "Placeholder" },\n        "ticketPricing": "Free",\n        "rating": "Placeholder",\n        "travelTime": "Varies depending on show schedule"\n      }\n    ],\n    "day3": [\n      {\n        "placeName": "Seven Magic Mountains",\n        "placeDetails": "Colorful art installation (short drive outside Vegas)",\n        "placeImageUrl": "Placeholder - Search on Google Images",\n        "geoCoordinates": { "lat": 35.9649, "lng": -114.9965 },\n        "ticketPricing": "Free",\n        "rating": "Placeholder - Check Google Reviews",\n        "travelTime": "30-45 minutes driving, plus time at the location."\n      },\n       {\n        "placeName": "Neon Museum",\n        "placeDetails": "Museum of vintage Las Vegas signs (consider price)",\n        "placeImageUrl": "Placeholder - Search on Google Images",\n        "geoCoordinates": { "lat": 36.1706, "lng": -115.1396 },\n        "ticketPricing": "Check their website for pricing",\n        "rating": "Placeholder - Check Google Reviews",\n        "travelTime": "1 hour"\n      }\n    ]\n  }\n}\n```\n\nRemember to replace the placeholders with actual data from your research.  Prioritize free activities and look for hotel deals to stay within your budget.  Consider using public transportation or ride-sharing services to minimize transportation costs.  Enjoy your trip!\n',
        },
      ],
    },
  ],
});
