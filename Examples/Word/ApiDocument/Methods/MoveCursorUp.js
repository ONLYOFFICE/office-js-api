// This example shows how to move the cursor up through the document.

// How to move the cursor up by a specified number of paragraphs.

// Create multiple paragraphs, move cursor down, then move it up with selection.
let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.MoveCursorToEnd();
doc.MoveCursorUp(3);

let paragraph = Api.CreateParagraph();
paragraph.AddText("Current line is: ");
paragraph.AddText(doc.GetCurrentSentence());
doc.Push(paragraph);
