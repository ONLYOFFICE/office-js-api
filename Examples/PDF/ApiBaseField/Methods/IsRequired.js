// This example gets field required and display's it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetValue('Required: ' + textField.IsRequired());