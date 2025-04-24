// This example gets text field and display it's type.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetValue(textField.GetClassType());
