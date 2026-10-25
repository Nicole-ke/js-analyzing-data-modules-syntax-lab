const DateJS = require("datejs");

function combineUsers(...args) {
  //This creates an object with an empty users array
  const combinedObject = {
    users: []
  
};

//Loop through eaxh array passed into the function
for(const userArray of args) {
  //Spread the usernames into the users array
  combinedObject.users.push(...userArray);
}

//Add today's date in month, then day and then year format
combinedObject.merge_date = Date.today().toString("M/d/yyyy");

//Return the completed object
return combinedObject;

}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};