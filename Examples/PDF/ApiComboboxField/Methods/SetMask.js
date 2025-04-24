// This example gets text field and sets mask for entered text for it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetMask("(999)999-9999");
comboboxField.SetValue("(123)456-7890");
