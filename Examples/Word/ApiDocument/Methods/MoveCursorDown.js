// This example shows how to move the cursor down through the document.

// How to move the cursor down by a specified number of lines.

// Create multiple paragraphs and move cursor.
let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 0; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.MoveCursorDown(3);

let paragraph = Api.CreateParagraph();
paragraph.AddText("Current line is: ");
paragraph.AddText(doc.GetCurrentSentence());
doc.Push(paragraph);
