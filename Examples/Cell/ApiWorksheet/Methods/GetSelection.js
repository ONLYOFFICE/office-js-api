// Get an object that represents the selected range in a spreadsheet.

// How to get selected range in a spreadsheet.

// Get selection from the worksheet and set its value.

let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");