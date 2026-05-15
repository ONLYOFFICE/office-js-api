// Split the current paragraph into two at the cursor position in a document.

// How do I insert a paragraph break at a chosen location in a document?

// Divide existing text into separate paragraphs without manually retyping any content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph.");
doc.MoveCursorRight(6, false, true);
doc.InsertParagraphBreak();
doc.EnterText("This is the second paragraph.");