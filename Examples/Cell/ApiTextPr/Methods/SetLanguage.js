// Set the spell-check language through the text properties of a run in a spreadsheet.

// How do I choose the proofing language with text properties in a spreadsheet?

// Get the text properties of a run inside a shape and assign a language code so the text is checked against the matching dictionary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetLanguage("en-CA");
paragraph.SetJc("left");
run.AddText("This is a sample text.");
paragraph.AddElement(run);