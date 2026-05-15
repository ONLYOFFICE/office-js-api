// Replace a text selection with an automatically updated field in a document.

// How do I insert a dynamic field that replaces existing text in a document?

// Swap out a passage for a field that updates its value automatically in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This text for time field");
let range = paragraph.GetRange();
range.AddField('TIME \\@ "dddd, MMMM d, yyyy"');
paragraph = Api.CreateParagraph();
paragraph.AddText("The text within range was replaced by field with TIME instruction field.");
doc.Push(paragraph);