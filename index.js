//Our code here

//Declare global variables
let phList = document.getElementById('ph-list')
let showHoliday = document.getElementById('show-holiday')
let newHolidayForm = document.getElementById('new-holiday-form')
let selectCountry = document.getElementById('select-country')
let selectYear = document.getElementById('select-year')
let goButton = document.getElementById('go-button')
let subtitle = document.getElementById('subtitle')

//Getting data using fetch and render on page
fetchAndRender()
function fetchAndRender(country='US', year='2022'){
    fetch(`https://date.nager.at/api/v2/publicholidays/${year}/${country}`)
    .then(res => res.json())
    .then(data => renderHolidayList(data))
}

//
function renderHolidayList(data){
    phList.innerHTML = ""
    showHoliday.innerHTML = ""
    data.map(element=>{
        let holidayName = document.createElement('li')
        holidayName.className = "holiday-name"
        holidayName.textContent = element.name.toUpperCase()
        // holidayName.style.color = 'magenta'
        // holidayName.style.textDecoration = 'underline'
        // holidayName.style.fontSize = '18px'

        phList.append(holidayName)
        holidayName.addEventListener('click',()=>{
            renderHoliday(element)
        })
    })
}

//
function renderHoliday(element){
    showHoliday.innerHTML = ""
    let titleDisplay = document.createElement('h3')
    titleDisplay.textContent = `Details`
    let nameDisplay = document.createElement('p')
    nameDisplay.textContent = `Name of holiday : ${element.name}`
    let dateDisplay = document.createElement('p')
    dateDisplay.textContent = `Date : ${element.date}` 
    let type = document.createElement('p')
    type.textContent = `Type of holiday : ${element.type}`
    // // // let likeButton = document.createElement('button')
    // // // likeButton.textContent = 'Like'
    showHoliday.append(titleDisplay,nameDisplay,dateDisplay,type)
}

//
let country = 'US';
selectCountry.addEventListener('change',(e)=>{
    country = e.target.value
})
let year = '2022';
selectYear.addEventListener('change',(e)=>{
    year = e.target.value
})
goButton.addEventListener('click', function(){
    fetchAndRender(country, year)
    subtitle.textContent = `Public Holidays in ${country} in ${year}`
})

newHolidayForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newNameTag = document.createElement('li')
    newNameTag.textContent = `${e.target.name.value} (new)`
    newNameTag.className = "holiday-name"
    phList.append(newNameTag)
    let newObj ={'name':`${e.target.name.value}`, 'date':`${e.target.date.value}`, 'type':`${e.target.type.value}`}
    newNameTag.addEventListener('click',()=>renderHoliday(newObj))
    newHolidayForm.reset()
})

