// Read the checked state of a checkbox content control in a document.

// How do I find out whether a checkbox content control is checked in a document?

// Conditionally display text based on whether a checkbox is ticked or unticked in a document.

let doc = Api.GetDocument();
let checkBox = doc.AddCheckBoxContentControl();
let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
let isChecked = checkBox.IsCheckBoxChecked();
paragraph.AddText("Checked: " + (isChecked ? "true" : "false"));