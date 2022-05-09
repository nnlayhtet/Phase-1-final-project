//Our code here

//Getting data using fetch
fetch(`https://date.nager.at/api/v2/publicholidays/2023/US`)
.then(res => res.json())
.then(data => data.forEach((item)=>console.log(item)))