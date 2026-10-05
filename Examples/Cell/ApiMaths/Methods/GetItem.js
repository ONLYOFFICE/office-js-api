// Return the equation specified by its index from the collection of equations of a worksheet in a spreadsheet.

// Access a single equation from the collection returned by GetMaths using its zero-based index.

// Attach an equation to a shape, then get it back by index and check that an out-of-range index returns null.

let worksheet = Api.GetActiveSheet();
let shape = worksheet.AddShape("rect", 50 * 36000, 50 * 36000, null, null, 0, 0, 0, 0);
let math = Api.CreateMath("x^2", "unicode");
shape.GetContent().GetElement(0).AddElement(math);

let maths = worksheet.GetMaths();
let firstItem = maths.GetItem(0);
let outOfRangeItem = maths.GetItem(5);
worksheet.GetRange("A1").SetValue("First item text = " + firstItem.GetText("unicode") + ", out of range = " + (null === outOfRangeItem));
