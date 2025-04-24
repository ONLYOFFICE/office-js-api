// This example gets text field and sets number format for it and then clear format.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000');
comboboxField.ClearFormat();
