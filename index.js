//Our code here

let phList = document.getElementById('ph-list')


//Getting data using fetch and render on page
function fetchAndRender(){
    fetch(`https://date.nager.at/api/v2/publicholidays/2023/US`)
    .then(res => res.json())
    .then(data => renderHolidayList(data))
}
function renderHolidayList(data){
    data.map(element=>{
        let holidayName = document.createElement('li')
        holidayName.textContent = element.name
        //console.log(holidayName)
        phList.append(holidayName)
    })

}
fetchAndRender()



// // A sample new holiday post
// let newPost = {    "date": "2023-12-25",
// "localName": "My Birth-Day",
// "name": "Birth Day",
// "countryCode": "US",
// "fixed": false,
// "global": true,
// "counties": null,
// "launchYear": null,
// "type": "Local"}


// // To Post a new local holiday 
// const postContent = (newPost) =>{
//     return fetch(`http://localhost:3000/2023`,{
//     method:'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify(newPost)

// })
// .then(res => res.json())
// }
//.then(data => console.log(data))
