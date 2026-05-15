// Identify the type name of a text content object attached to a shape in a spreadsheet.

// How do I find out what kind of content object a shape's text area returns in a spreadsheet?

// Confirm the content category of a shape by reading its type label in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let classType = content.GetClassType();
let paragraph = content.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);