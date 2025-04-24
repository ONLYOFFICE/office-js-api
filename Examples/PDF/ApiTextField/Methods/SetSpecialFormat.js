// This example gets text field and sets special format for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetSpecialFormat("phone");
textField.SetValue("1234567890");
