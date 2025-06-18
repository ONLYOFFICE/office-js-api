// This example reates a copy of the run.

// How to create a text run object and its copy.

// Create an ApiRun and its copy and add it into paragraph.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run);
let copyRun = run.Copy();
paragraph.AddElement(copyRun);