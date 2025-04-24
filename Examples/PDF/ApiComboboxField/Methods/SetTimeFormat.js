// This example gets text field and sets time format for it.
let doc = Api.GetDocument();
let comboboxField = doc.AddComboboxField(0, [10, 10, 160, 30]);
comboboxField.SetTimeFormat("12HR:MM:SS");
comboboxField.SetValue("8:45:30");
