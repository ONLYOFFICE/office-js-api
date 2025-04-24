// This example adds text field and sets char limit for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetCharLimit(20);
textField.SetValue('Char limit is: ' + textField.GetCharLimit());
