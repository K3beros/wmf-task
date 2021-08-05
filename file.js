const fs = require('fs')

//get the url path for the document
const file = './WMF Programming Task';


fs.readFile(file, 'utf8', (err, content) => {
    if(err) {
        console.error('something went wrong')
    }

    //store list of words and their corresponding occurence
    let wordsObject = {}

    //convert returned content into array
    let fileArray = content.split(/\s|[-]/)

    //filter method removes empty strings by returning true elements, skips empty string since 
     //it evaluates to false
    let fileArrayWithoutSpace = fileArray.filter(e => e)
    

    for(let i = 0; i< fileArrayWithoutSpace.length; i++) {
    //use tenary operation to solve for truthy/falsy condition
    wordsObject[fileArrayWithoutSpace[i]] = wordsObject.hasOwnProperty(fileArrayWithoutSpace[i]) ? wordsObject[fileArrayWithoutSpace[i]] = wordsObject[fileArrayWithoutSpace[i]] + 1 : wordsObject[fileArrayWithoutSpace[i]] = 1
    }

    objSorted(wordsObject)

    return content
})


//function for sorting key occurence in descending order
function objSorted(someObj) {
    let entries = Object.entries(someObj)
    let sorted = entries.sort((a, b) => b[1] - a[1])
    console.log(sorted)
    return sorted
}


