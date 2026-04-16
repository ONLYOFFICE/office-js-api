// Specify the languages which will be used to check spelling and grammar (if requested) when processing the contents of this text run in a spreadsheet.

// How to set a language to the text for grammar checking in a spreadsheet.

// Create a text run object, change its language to English for grammar check in a spreadsheet.

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