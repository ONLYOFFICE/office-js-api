// Read the widow control setting of a paragraph in a document.

// How do I check whether widow control is enabled for a paragraph in a document?

// Verify the widow control state after toggling it to ensure the setting was applied.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetWidowControl(true);
paragraph.AddText("This is a paragraph with widow control enabled.");
let widowControl = paraPr.GetWidowControl();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Widow control: " + widowControl);
doc.Push(paragraph2);