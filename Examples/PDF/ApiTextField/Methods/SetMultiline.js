// This example adds text field and sets multiline for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());
