// This example sets the text fill to the current text run.

// How to color a text object.

// Create a text run object, add color to it using solid fill.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
fill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
run.SetTextFill(fill);
run.AddText("This is a text run with the gray text.");
paragraph.AddElement(run);