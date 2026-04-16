// Retrieve the class type of a cell range in a spreadsheet.

// How to identify the class type of a cell range?

// Obtain the class type identifier of a cell range object.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);