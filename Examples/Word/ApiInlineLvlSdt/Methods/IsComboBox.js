// This example shows how to check if the content control is a combobox list.
let doc = Api.GetDocument();
let comboboxControl = doc.AddComboBoxContentControl();
let isComboBox = comboboxControl.IsComboBox();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Is this content control a combobox list? " + isComboBox);
doc.Push(paragraph);