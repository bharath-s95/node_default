const fs = require('fs');

/*fs.open('demo_text.txt', 'w', (err, file) => {
    if (err)
        return console.log('Error!');
    console.log('File Written Successfully!');
})*/

// fs.appendFile("demo_text1.txt", "Hello File!", (err, file) => {
//     if (err)
//         return console.log("Error");
//     console.log("File written successfully");
// })

// fs.writeFile("demo_write2.txt", "Hello File2", (err) => {

// })

// fs.unlink("demo_text.txt", (err) => {
//     if (err)
//         return console.log(err.message);
// })

fs.rename("demo_text1.txt", "renamed.txt", (err, file) => {

});