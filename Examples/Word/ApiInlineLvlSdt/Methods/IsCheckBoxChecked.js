// Check state of a checkbox content control in a document.

// How can I is check box checked using an inline content control in a document?

// Is check box checked for an inline content control in a document.

let doc = Api.GetDocument();
let checkBox = doc.AddCheckBoxContentControl();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let isChecked = checkBox.IsCheckBoxChecked();
paragraph.AddText("Checked: " + (isChecked ? "true" : "false"));