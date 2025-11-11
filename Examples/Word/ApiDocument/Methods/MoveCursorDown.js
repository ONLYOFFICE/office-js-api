// This example shows how to move the cursor down through the document.

// How to move the cursor down by a specified number of lines.

// Create multiple paragraphs and move cursor down with selection.
let doc = Api.GetDocument();
const paragraphCount = 5;
for (let i = 1; i < paragraphCount; i++) {
    const newParagraph = Api.CreateParagraph();
    newParagraph.AddText("This is " + (i + 1) + " paragraph.");
    doc.Push(newParagraph);
}

doc.ForceRecalculate();
doc.MoveCursorDown(3, false, false);
doc.MoveCursorUp(1, true, true);