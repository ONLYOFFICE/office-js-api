// Move the cursor outside of the inline content control in a document.

// How to move the cursor out of the form.

// Move the cursor out of the inline text control in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("The cursor will be placed after the current content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.MoveCursorOutside(true);