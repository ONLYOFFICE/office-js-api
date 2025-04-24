// This example sets field read only.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetReadOnly(true);
textField.SetValue('Read only is: ' + textField.IsReadOnly());