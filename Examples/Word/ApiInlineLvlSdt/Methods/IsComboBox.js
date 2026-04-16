// Check if the content control is a combobox list in a document.

// How to is combo box for an inline content control in a document?

// Is combo box and display the result in a document.

let doc = Api.GetDocument();
let comboboxControl = doc.AddComboBoxContentControl();
let isComboBox = comboboxControl.IsComboBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a combobox list? " + isComboBox);
doc.Push(paragraph);