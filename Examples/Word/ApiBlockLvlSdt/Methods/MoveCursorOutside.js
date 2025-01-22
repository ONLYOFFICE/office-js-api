// This example shows how to move the cursor outside the content control.
let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorOutside(true);