// Get an object that represents the selected range in a spreadsheet.

// How to get selected range object in a spreadsheet.

// Update the value of the selected range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");