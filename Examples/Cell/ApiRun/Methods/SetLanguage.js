// Assign a language to a text run so spelling and grammar checks use the correct rules in a spreadsheet.

// How do I set the proofreading language for a piece of text in a spreadsheet?

// Mark text with a specific locale so the editor checks it against the right dictionary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
run.SetLanguage("en-CA");
paragraph.AddElement(run);