// This example gets text field and displays char limit property.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());
