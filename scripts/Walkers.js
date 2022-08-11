import { getWalkers, getWalkerCities, getCities } from "./database.js"

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const walkCityObj = walkerCitiesObj(walker)
                    const cities = allCityNames(walkCityObj)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

const walkerCitiesObj = (walker) => {
    let walkCityObj = []

    for (const walkCity of walkerCities) {
        if  (walkCity.walkerId === walker.id)
            walkCityObj.push(walkCity)
    }
    return walkCityObj
}

const allCityNames = (walkCityObj) => {
    let allCity = ""

    for (const walkObj   of walkCityObj) {
        for (const city of cities) {
            if (walkObj.cityId === city.id) {
                allCity = `${allCity} and ${city.name}`
            }
            
        }
    }
    return allCity
}

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

