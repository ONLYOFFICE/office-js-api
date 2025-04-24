// This example adds text field to document.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 32]);
textField.SetValue('This is the text field');