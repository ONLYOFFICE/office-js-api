// This example shows how to get the spacing after value of the paragraph.
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph1 = content.GetElement(0);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph1.SetSpacingAfter(1440);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();
let spacingAfter = paragraph1.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
content.Push(paragraph2);