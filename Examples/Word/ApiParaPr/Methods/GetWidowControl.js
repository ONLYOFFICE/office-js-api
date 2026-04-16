// Get the widow control value of the current paragraph in a document.

// Get the widow control value of the paragraph and display it in the document.

// How to get the widow control value of the paragraph properties object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetWidowControl(true);
paragraph.AddText("This is a paragraph with widow control enabled.");
let widowControl = paraPr.GetWidowControl();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Widow control: " + widowControl);
doc.Push(paragraph2);