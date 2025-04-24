// This example gets text field and sets number format for it and then clear format.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000');
textField.ClearFormat();
