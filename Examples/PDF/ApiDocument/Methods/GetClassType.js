// This example gets document object class type and displays it in text field.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 32]);
textField.SetValue(doc.GetClassType());