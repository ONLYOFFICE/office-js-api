// This example gets text field and sets date format for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");
