// This example gets a class type and pastes it into the presentation.

// How to get a class type of ApiTextPr.

// Get a class type of ApiTextPr and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
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