// Check whether the current paragraph has no content elements.

// Verify that a newly created paragraph reports as empty.

// Confirm the empty state changes once text is added.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = Api.CreateParagraph();
let emptyBefore = paragraph.IsEmpty();
paragraph.AddText("This is a sample text.");
let emptyAfter = paragraph.IsEmpty();
content.Push(paragraph);
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("The paragraph was empty before adding text: " + emptyBefore + ". After adding text: " + emptyAfter + ".");
content.Push(resultParagraph);
