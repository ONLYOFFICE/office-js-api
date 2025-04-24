// This example gets text field and sets date format for it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetDateFormat("dd.mm.yyyy");
comboboxField.SetValue("10 january 2015");
