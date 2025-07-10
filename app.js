// // index.js

// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware (for parsing JSON requests)
// app.use(express.json());

// // Sample route
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the Express.js server!' });
// });

// app.get('/about',(req,res)=> {
//     res.json({message:'about page'});
// });
// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// const { json } = require('express');
// const http=require('http');

// // const server= http.createServer((req,res)=>{
// //     res.writeHead(200,{'content-type':'text/html'});
// //     res.write('<h1>hello,world</h1>');
// //     res.end();
// // });
// const data={
//     id:578,
//     name:"bhaskar",
//     role:"mern stack developer",
//     status:"status"
// };

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application/json',
//         'access-control-allow-origin':'*'
//     });
//     res.end(JSON.stringify(data));
// });
// const PORT=5000;
// server.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// skills.js

// const content = "HTML,CSS,Javascript, Typescript, mongodb, express.js,react.js,node.js";

// // Step 1: Split the string by commas and trim spaces
// const skills = content.split(',').map(skill => skill.trim());

// // Step 2: Display each skill
// console.log("🚀 Your Skills:");
// skills.forEach((skill, index) => {
//   console.log(`${index + 1}. ${skill}`);
// });


// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
