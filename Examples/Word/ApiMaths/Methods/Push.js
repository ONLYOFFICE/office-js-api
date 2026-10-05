// Insert an equation created separately at the current cursor position in a document.

// The equation built with Api.CreateMath appears in the document only after it is pushed to the equations collection.

// Create an equation, insert it after the paragraph text, then report the text of the inserted equation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Pythagorean theorem: ");
doc.MoveCursorToEnd();
let math = Api.CreateMath("a^2 + b^2 = c^2", "unicode");
let insertedMath = doc.GetMaths().Push(math);
paragraph = Api.CreateParagraph();
paragraph.AddText("Inserted equation: " + insertedMath.GetText());
doc.Push(paragraph);
