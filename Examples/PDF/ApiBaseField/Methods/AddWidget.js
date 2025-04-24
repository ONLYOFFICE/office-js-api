// This example adds new widget - visual representation for field
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetValue('Example text');
textField.AddWidget(0, [10, 40, 160, 60]);
