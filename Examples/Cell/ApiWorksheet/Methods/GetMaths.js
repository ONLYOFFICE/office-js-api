// Return the collection of equations of a worksheet in a spreadsheet.

// Get access to the ApiMaths object that gathers all the equations attached to the current sheet.

// Attach an equation to a shape, then read the number of equations found through the worksheet's equations collection.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let math = Api.CreateMath("x^2", "unicode");
shape.GetContent().GetElement(0).AddElement(math);

let maths = worksheet.GetMaths();
worksheet.GetRange("A1").SetValue("Equations count = " + maths.GetCount());
