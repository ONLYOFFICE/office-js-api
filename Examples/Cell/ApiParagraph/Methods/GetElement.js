// Access a specific text run inside a paragraph by its position in a spreadsheet.

// How do I pick out one piece of a paragraph to change its style in a spreadsheet?

// Bold the third text run in a paragraph by targeting it through its index in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.RemoveAllElements();
let run = Api.CreateRun();
run.AddText("This is the text for the first text run. Do not forget a space at its end to separate from the second one. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the second run. We will set it bold afterwards. It also needs space at its end. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is the text for the third run. It ends the paragraph.");
paragraph.AddElement(run);
run = paragraph.GetElement(2);
run.SetBold(true);