//Our code here


let localDb = [];
//Getting data using fetch
fetch(`https://date.nager.at/api/v2/publicholidays/2023/US`)
.then(res => res.json())
.then(data => data.map((item)=>localDb.push(item)))

console.log(localDb)