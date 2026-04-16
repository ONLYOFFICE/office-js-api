// Retrieve the class type of a text properties in a spreadsheet.

// How to identify the class type of a text properties in a spreadsheet?

// Obtain the class type identifier of a text properties object in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
paragraph.SetJc("left");
let classType = textProps.GetClassType();
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);