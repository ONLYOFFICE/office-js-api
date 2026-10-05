// Return the number of equations in a worksheet in a spreadsheet.

// Count how many equations are currently attached to the worksheet, as tracked by the collection returned by GetMaths.

// Attach an equation to a shape, then read the total number of equations found on the sheet.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let math = Api.CreateMath("x^2", "unicode");
shape.GetContent().GetElement(0).AddElement(math);

let count = worksheet.GetMaths().GetCount();
worksheet.GetRange("A1").SetValue("Equations count = " + count);
