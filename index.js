//Our code here
<<<<<<< HEAD
let db = []
//Getting data using fetch
// fetch(`https://date.nager.at/api/v2/publicholidays/2023/US`)
// .then(res => res.json())
// .then(data => data.map((item)=>{
//     db.push(item)

// }))
// console.log(db)

// fetch(`https://date.nager.at/api/v2/publicholidays/2023/US`)
// .then(res=> {
//     fetch
//      )
=======


let localDb = [];
//Getting data using fetch
fetch(`https://date.nager.at/api/v2/publicholidays/2023/US`)
.then(res => res.json())
.then(data => data.forEach((item)=>addItemToDb(item)))

function addItemToDb(item){
    localDb.push() = item
    console.log(localDb)
}
>>>>>>> 25f59c2e3c8a55564f39e25fa408ea80b8f9bfa0
