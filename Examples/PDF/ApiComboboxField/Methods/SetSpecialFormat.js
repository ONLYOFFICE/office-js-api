// This example gets text field and sets special format for it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetSpecialFormat("phone");
comboboxField.SetValue("1234567890");
