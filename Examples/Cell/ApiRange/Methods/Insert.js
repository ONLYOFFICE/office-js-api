// This example inserts a cell or a range of cells into the worksheet or macro sheet and shifts other cells away to make space.

// How to insert a range or a cell into a worksheet.

// Insert a range or a cell into a worksheet specifying its shift direction.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Insert("down");
