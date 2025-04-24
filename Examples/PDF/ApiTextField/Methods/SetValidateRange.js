// This example gets text field and sets validate range for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValidateRange(true, 0, true, 5);
textField.SetValue('10');
