// This example gets text field and sets validate range for it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValidateRange(true, 0, true, 5);
comboboxField.SetValue('10');
