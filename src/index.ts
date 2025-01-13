// Array of rooftop objects with colors
const rooftops = [
  { id: 1, color: "red" },
  { id: 2, color: "green" },
  { id: 3, color: "blue" },
];

// Find all unique rooftop colors
const uniqueColors = new Set(rooftops.map(r => r.color));
console.log(`Unique rooftop colors: ${[...uniqueColors].join(", ")}`);

