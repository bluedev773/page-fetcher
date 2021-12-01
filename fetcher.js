const request = require('request');
const fs = require('fs');

//get input from command line
const input = process.argv.slice(2);
const url = input[0];
const path = input[1];


const fetcher = (url, path) => {
  request(url, (error, response, body) => {
    //write to file
    fs.writeFile(path, body, err => {
      if(err) {
        console.log(err);
        return
      }
    })
  })
}

fetcher(url, path);