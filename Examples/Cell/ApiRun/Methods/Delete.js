// Remove a text run from a paragraph inside a shape in a spreadsheet.

// How do I delete a run of text from a shape in a spreadsheet?

// Add a run to a paragraph and then discard it so nothing appears in the shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run.Delete();
worksheet.GetRange("A9").SetValue("The run from the shape content was removed.");