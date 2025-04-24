// This example gets field full name and displays it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetValue('Field full name is: ' + textField.GetFullName());