// This example sets field required.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetRequired(true);
textField.SetValue('Required: ' + textField.IsRequired());