//Our code here

let phList = document.getElementById('ph-list')
let showHoliday = document.getElementById('show-holiday')

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

        holidayName.addEventListener('click',()=>{
            renderHoliday(element)
            
        })
    })

}
fetchAndRender()

function renderHoliday(element){
    showHoliday.innerHTML = ""
    let nameDisplay = document.createElement('p')
    nameDisplay.textContent = `Name of holiday : ${element.name}`
    let dateDisplay = document.createElement('p')
    dateDisplay.textContent = `Date : ${element.date}` 
    let type = document.createElement('p')
    type.textContent = `Type of holiday : ${element.type}`
    let likeButton = document.createElement('button')
    likeButton.textContent = 'Like'
    showHoliday.append(nameDisplay,dateDisplay,type,likeButton)




}



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
