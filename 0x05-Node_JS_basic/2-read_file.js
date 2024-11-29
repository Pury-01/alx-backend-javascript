// function that accepts a path in argument
// 'fs' module to handle file operations
const fs = require('fs');

function countStudents(path) {
  try {
  // read file content synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // split file content into lines
    const lines = data.split('\n');

    // remobe empty lines
    const validLines = lines.filter((line) => line.trim() !== '');
    if (validLines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }
    // separate header from data
    const [header, ...students] = validLines;

    // object to store field-specific data
    const fields = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');
      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // count total number of students
    console.log(`Number of students: ${students.length}`);

    // log each field and it's respective students
    for (const [field, firstnames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
