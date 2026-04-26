// Duplicate a shape on a worksheet and read the class type of the copy.

// How do I make a copy of a shape in a spreadsheet?

// Clone a shape and verify the copy preserves the shape class in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let copyShape = shape.Copy();
worksheet.GetRange("A1").SetValue("Copy class type:");
worksheet.GetRange("B1").SetValue(copyShape.GetClassType());
