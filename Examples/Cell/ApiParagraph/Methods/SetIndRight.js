// This example sets the paragraph right side indentation.

// How to change the sentence's right side indentation of the paragraph.

// Get a paragraph from the shape's content then add a text specifying the right side indentation.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is a paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("We also aligned the text in it by the right side. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
paragraph.SetIndRight(2880);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph without any offset set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
content.Push(paragraph);