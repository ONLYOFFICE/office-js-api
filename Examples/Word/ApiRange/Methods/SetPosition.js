// Raise or lower selected text relative to the surrounding baseline in a document.

// How do I shift a portion of text up or down without changing its size in a document?

// Adjust the vertical offset of highlighted words to create superscript or subscript effects in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
paragraph.AddText("This is a text run with the text raised 5 points (10 half-points).");
let range = doc.GetRange(22, 75);
range.SetPosition(10);