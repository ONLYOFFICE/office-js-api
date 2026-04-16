// Check the class type returned by a cell range.

// How do I check what type a cell range object is?

// Retrieve and output the class type string for a cell range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is just a sample text in the cell A1.");
let classType = range.GetClassType();
worksheet.GetRange('A3').SetValue("Class type: " + classType);