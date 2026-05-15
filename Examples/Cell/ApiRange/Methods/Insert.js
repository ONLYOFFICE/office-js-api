// Add a new cell or range and push existing cells aside to make room in a spreadsheet.

// How do I insert a blank cell into a filled area and shift the surrounding data in a spreadsheet?

// Make space for new data by inserting a cell and choosing which direction the neighbors move in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B4").SetValue("1");
worksheet.GetRange("C4").SetValue("2");
worksheet.GetRange("D4").SetValue("3");
worksheet.GetRange("C5").SetValue("5");
let range = worksheet.GetRange("C4");
range.Insert("down");