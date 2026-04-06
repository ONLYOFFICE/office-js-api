// This example gets text field and sets percentage format for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetPercentageFormat(0, "us");
comboboxField.SetValue(10);
