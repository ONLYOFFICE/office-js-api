// Read the text alignment setting applied to a paragraph in a document.

// How do I find out the justification type of a paragraph in a document?

// Verify a center-aligned paragraph by printing its justification value in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");
let paraJc = paragraph.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + paraJc);
doc.Push(paragraph);