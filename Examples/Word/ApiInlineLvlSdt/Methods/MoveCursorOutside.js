// Place the cursor outside an inline content control in a document.

// How do I move the cursor beyond the boundaries of an inline content control in a document?

// Programmatically exit a content control so subsequent input lands outside it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("The cursor will be placed after the current content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.MoveCursorOutside(true);