// This example gets text field and displays multiline property.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
