// This example shows how to check if a content control is a combobox.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
paragraph1.AddText(contentControl.IsComboBox() ? "true" : "false");
doc.AddElement(1, paragraph1);