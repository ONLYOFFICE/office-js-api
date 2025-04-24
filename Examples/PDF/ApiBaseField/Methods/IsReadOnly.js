// This example gets field read only and display's it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetValue('Read only is: ' + textField.IsReadOnly());