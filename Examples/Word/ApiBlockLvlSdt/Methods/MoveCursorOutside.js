// Move the cursor outside a content control in a document.

// How do I move the cursor outside a content control in a document?

// Place the cursor after a content control to continue typing outside it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorOutside(true);