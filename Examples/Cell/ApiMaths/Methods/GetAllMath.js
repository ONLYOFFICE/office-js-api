// Return all equations attached to a worksheet in a spreadsheet.

// Collect every equation currently attached to the worksheet into an array, using the collection returned by GetMaths.

// Add an equation to each of two shapes, then count how many equations are returned in total.

let worksheet = Api.GetActiveSheet();
let maths = worksheet.GetMaths();

let shape1 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, null, null, 0, 0, 0, 0);
shape1.GetTextRange().Select();
maths.Add("a^2", "unicode");

let shape2 = worksheet.AddShape("rect", 50 * 36000, 30 * 36000, null, null, 4, 0, 0, 0);
shape2.GetTextRange().Select();
maths.Add("b^2", "unicode");

let allMath = maths.GetAllMath();
worksheet.GetRange("A10").SetValue("Total equations found = " + allMath.length);
