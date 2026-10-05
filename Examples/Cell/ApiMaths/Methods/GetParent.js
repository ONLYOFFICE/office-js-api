// Return the worksheet that owns the collection of equations in a spreadsheet.

// Get access to the parent worksheet object from the equations collection returned by GetMaths.

// Get the equations collection of the active sheet, then read the name of its parent worksheet.

let worksheet = Api.GetActiveSheet();
let maths = worksheet.GetMaths();
let parent = maths.GetParent();
worksheet.GetRange("A1").SetValue("Parent worksheet name = " + parent.GetName());
