// Identify the object type of a cell range in a spreadsheet.

// How do I find out what kind of object a cell range is in a spreadsheet?

// Write the type label of a range into another cell to confirm its category.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);