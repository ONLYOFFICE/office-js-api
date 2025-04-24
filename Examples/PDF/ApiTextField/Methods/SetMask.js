// This example gets text field and sets mask for entered text for it.
let doc = Api.GetDocument();
let textField = doc.AddTextField(0, [10, 10, 160, 30]);
textField.SetMask("(999)999-9999");
textField.SetValue("(123)456-7890");
