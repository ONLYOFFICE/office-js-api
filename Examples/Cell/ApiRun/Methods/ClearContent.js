// This example clears the content from the run.

// How to create a text run object, add a text to it and clear its value.

// Clear content of an ApiRun object.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is just a sample text. ");
run.AddText("But you will not see it in the resulting document, as it will be cleared.");
paragraph.AddElement(run);
run.ClearContent();
paragraph = Api.CreateParagraph();
run = Api.CreateRun();
run.AddText("The text in the previous paragraph cannot be seen, as it has been cleared.");
paragraph.AddElement(run);
content.Push(paragraph);