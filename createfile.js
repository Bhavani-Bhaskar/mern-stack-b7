// createFile.js

const fs = require('fs');

const content = "HTML,CSS,Javascript, Typescript, mongodb, express.js,react.js,node.js";

// Optional: Format the content into a line-by-line list
const skills = content.split(',').map(skill => skill.trim());
const formattedContent = skills.map((s, i) => `${i + 1}. ${s}`).join('\n');

// Write to file
fs.writeFile('skills.txt', formattedContent, (err) => {
  if (err) {
    console.error('❌ Error writing file:', err);
  } else {
    console.log('✅ skills.txt has been created!');
  }
});
