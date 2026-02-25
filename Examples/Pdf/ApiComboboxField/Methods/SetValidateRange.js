// This example gets text field and sets validate range for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValidateRange(true, 0, true, 5);
comboboxField.SetValue('10');
