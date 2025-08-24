// Current date and time
const now = new Date();

// From timestamp (milliseconds since Jan 1, 1970 UTC)
const fromTimestamp = new Date(1678900000000);


// use  epoch convention 
// https://www.epochconverter.com/

// From date string
const fromString = new Date('2023-03-15T10:30:00');

// From year, month (0-based), day, hours, minutes, seconds, ms
const fromComponents = new Date(2023, 2, 15, 10, 30, 0, 0);  // March 15, 2023 10:30:00



const d = new Date();


// ⏱ Getting parts of a date
console.log(d.getFullYear());   // 2025
console.log(d.getMonth());      // 0-11 (0 = Jan)
console.log(d.getDate());       // Day of month 1-31
console.log(d.getDay());        // Day of week 0-6 (0 = Sun)
console.log(d.getHours());      // 0-23
console.log(d.getMinutes());    // 0-59
console.log(d.getSeconds());    // 0-59
console.log(d.getMilliseconds());// 0-999
console.log(d.getTime());       // Timestamp (ms since 1970-01-01)













// 📝 Setting parts of a date
d.setFullYear(2030);
d.setMonth(5);          // June (0-based)
d.setDate(20);          // 20th
d.setHours(12);
d.setMinutes(45);
d.setSeconds(30);
d.setMilliseconds(500);



// 💡 Useful examples

// Get current timestamp
console.log(Date.now());

// Parse date string to timestamp
console.log(Date.parse("2025-06-17T12:00:00Z"));

// Custom format
const custom = new Date();
console.log(`${custom.getDate()}-${custom.getMonth()+1}-${custom.getFullYear()}`);
