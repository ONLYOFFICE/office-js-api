// This example shows how to add a combobox content control.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.AddComboBoxContentControl();
paragraph.AddText("ComboBox content control");