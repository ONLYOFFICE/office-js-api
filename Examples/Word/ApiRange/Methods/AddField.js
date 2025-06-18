// This example adds the field to the specified range by field instruction code. Note: This method removes text within range.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.AddField('TIME \\@ "dddd, MMMM d, yyyy"');
paragraph = Api.CreateParagraph();
paragraph.AddText("The text within range was replaced by field with TIME instruction field.");
doc.Push(paragraph);