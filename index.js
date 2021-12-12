const baseUrl = `https://api.openbrewerydb.org/breweries`

const selectStateForm = document.querySelector(`#select-state-form`)

const stateSelectLabel = document.querySelector(`label`)
const stateSelectInput = document.querySelector(`input`)






const state = {
    breweries:[],
    choosedState:""
}
function getBreweriesToDisplay(){
    
}
function getBreweries(){
    return fetch(baseUrl)
    .then(function(resp){
        return resp.json()
    })
}
function getBreweriesByState(state){
    return fetch(`${baseUrl}?by_state=${state}`)
    .then(function(resp){
        return resp.json()
    })
} 
function addBreweriesToState(){
    getBreweries().then(function(serverBreweries){
        return state.breweries.push( serverBreweries)
    })
}
function listenToSelectStateForm(){
    selectStateForm.addEventListener(`submit`, function(event){
        event.preventDefault()
       state.choosedState = selectStateForm['select-state'].value
       getBreweriesByState(state.choosedState)
       .then(function (breweriesFromServer){
           state.breweries = breweriesFromServer
       })
    })
}
function render(){

}
function init(){
    listenToSelectStateForm()
}
init()