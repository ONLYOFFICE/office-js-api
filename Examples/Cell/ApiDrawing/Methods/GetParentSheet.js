// Retrieve the sheet that contains a drawing in a spreadsheet.

// How do I find out which worksheet a drawing belongs to in a spreadsheet?

// Identify the parent sheet of a shape and use its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let parentSheet = shape.GetParentSheet();
let content = shape.GetDocContent();
let paragraph = content.GetElement(0);
paragraph.AddText("Parent sheet name is " + parentSheet.GetName());