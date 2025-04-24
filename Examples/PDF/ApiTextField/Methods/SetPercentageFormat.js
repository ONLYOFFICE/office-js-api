// This example gets text field and sets percentage format for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetPercentageFormat(0, "us");
textField.SetValue(10);
