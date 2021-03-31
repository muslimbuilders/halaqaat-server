import NodeGeocoder  from "node-geocoder"
const options = {
  provider: "mapquest",
  httpAdapter: "https",
  apiKey: "Z5KROby8Zi15xwPxHD3w7QnujJdSKKlh", // for Mapquest, OpenCage, Google Premier
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

export default geocoder;