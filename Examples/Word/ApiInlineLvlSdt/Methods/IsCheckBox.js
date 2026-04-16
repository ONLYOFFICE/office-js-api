// Check if an inline content control is a checkbox in a document.

// How do I is check box in a document?

// Is check box using an inline content control object in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddCheckBoxContentControl();
let isCheckBox = inlineControl.IsCheckBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is the content control a checkbox? " + isCheckBox);
doc.Push(paragraph);