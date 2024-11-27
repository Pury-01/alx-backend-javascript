// Import 'fs' module for file operations
const fs = require('fs');

// Function that accepts a path and returns a Promise
function countStudents(path) {
    return new Promise((resolve, reject) => {
        // Read file asynchronously
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                // If there's an error, reject the Promise with an error message
                reject(new Error('Cannot load the database'));
                return;
            }

            // Split file content into lines
            const lines = data.split('\n');

            // Remove empty lines
            const validLines = lines.filter((line) => line.trim() !== '');
            if (validLines.length <= 1) {
                console.log('Number of students: 0');
                resolve(); // Resolve with no additional output
                return;
            }

            // Separate header from data
            const [header, ...students] = validLines;

            // Object to store field-specific data
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

            // Log total number of students
            console.log(`Number of students: ${students.length}`);

            // Log each field and its respective students
            for (const [field, firstnames] of Object.entries(fields)) {
                console.log(
                    `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`
                );
            }

            resolve(); // Resolve the Promise once processing is done
        });
    });
}

module.exports = countStudents;
