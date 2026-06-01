// Determine whether an inline content control is a combo box in a document.

// How do I verify that a content control is a combo box in a document?

// Distinguish a combo box from other list-type controls before processing its selected value in a document.

let doc = Api.GetDocument();
let comboboxControl = doc.AddComboBoxContentControl();
let isComboBox = comboboxControl.IsComboBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a combobox list? " + isComboBox);
doc.Push(paragraph);