/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header")
const section = document.querySelector("section")
/* STEP 3: Store the URL of a JSON file in a variable */
const requestURL = "https://raw.githubusercontent.com/MWeeks6/Week10COMP1073/main/Week10%20Lesson%20Files%20Start/js/i-scream.json"
/* STEP 4: Create a new XHR object */
let request = new XMLHttpRequest()

/* STEP 5: Open a new request using the request() method */
request.open("GET", requestURL)

/* STEP 6: Set JavaScript to accept JSON from the server */
//this defines what type you want the response to be in
request.responseType = "json"

/* STEP 7: Send the request with the send() method */
request.send()

/* STEP 8: Add an event handler that listens for the onload event of the JSON file/object */
request.onload = function(){
    let iScreamInc = request.response
    console.log(iScreamInc)
    populateHeader(iScreamInc)
    showTopFlavors(iScreamInc)
}

/* STEP 9: Build out the populateHeader() function */
function populateHeader(jsonObj){
    let headerH1 = document.createElement("h1")
    headerH1.textContent = jsonObj.companyName
    header.appendChild(headerH1)

    let headerPara = document.createElement("p")
    headerPara.textContent =  `Head Office: ${jsonObj.headOffice}, Established ${jsonObj.established}`
    header.appendChild(headerPara)
}
/* STEP 10a: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj){
    // STEP 10b: Bind the JSON topFlavors object to a var
    let topFlavors = jsonObj.topFlavors

    // STEP 10c: Loop through the topFlavors object
    for(let i = 0; i < topFlavors.length; i++){
        // STEP 10d: build HTML elements for the content
        let article = document.createElement("article")
        let h2 = document.createElement("h2")
        let img = document.createElement("img")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let list = document.createElement("ul")

        // STEP 10e: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        img.setAttribute("src", "https://raw.githubusercontent.com/MWeeks6/Week10COMP1073/main/Week10%20Lesson%20Files%20Start/images/" + topFlavors[i].image)
        img.setAttribute("alt", topFlavors[i].name)
        h2.textContent = topFlavors[i].name
        p1.textContent = `Calories: ${topFlavors[i].calories}`
        p2.textContent = `Type: ${topFlavors[i].type}`

        // STEP 10f: Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i].ingredients

        for(let j = 0; j < ingredients.length; j++){
            let listItem = document.createElement("li")
            listItem.textContent = ingredients[j]
            list.appendChild(listItem)
        }

        // STEP 10g: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(img)
        article.appendChild(h2)
        article.appendChild(p1)
        article.appendChild(p2)
        article.appendChild(list)

        // STEP 10h: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article)
    }

}

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations