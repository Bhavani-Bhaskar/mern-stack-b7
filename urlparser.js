// parseUrl.js

const url = require('url');

// Example URL string
const websiteUrl = 'https://www.example.com:8080/path/to/page?name=bhaskar&role=student';

// Parse the URL
const parsedUrl = url.parse(websiteUrl, true);  // `true` parses the query string into an object

// Log all parts
console.log("✅ Parsed URL Information:");
console.log("Href: ", parsedUrl.href);
console.log("Protocol: ", parsedUrl.protocol);
console.log("Host: ", parsedUrl.host);
console.log("Hostname: ", parsedUrl.hostname);
console.log("Port: ", parsedUrl.port);
console.log("Pathname: ", parsedUrl.pathname);
console.log("Query Object: ", parsedUrl.query);
console.log("Query String: ", parsedUrl.search);
