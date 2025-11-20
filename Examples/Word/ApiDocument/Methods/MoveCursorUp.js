// This example shows how to move the cursor up through the document.

// How to move the cursor up by a specified number of paragraphs.

// Create multiple paragraphs, move cursor down, then move it up with selection.
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