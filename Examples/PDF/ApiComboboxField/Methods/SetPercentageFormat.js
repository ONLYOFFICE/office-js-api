// This example gets text field and sets percentage format for it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetPercentageFormat(0, "us");
comboboxField.SetValue(10);
