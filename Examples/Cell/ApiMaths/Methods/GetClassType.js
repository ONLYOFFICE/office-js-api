// Identify the object type of the equations collection of a worksheet in a spreadsheet.

// Find out what kind of object the collection returned by GetMaths is in a spreadsheet.

// Get the equations collection of the active sheet and write its class type into a cell.

let worksheet = Api.GetActiveSheet();
let maths = worksheet.GetMaths();
let classType = maths.GetClassType();
worksheet.GetRange("A1").SetValue("Class Type = " + classType);
