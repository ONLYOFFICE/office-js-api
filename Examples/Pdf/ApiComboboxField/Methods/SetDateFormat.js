// This example gets text field and sets date format for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetDateFormat("dd.mm.yyyy");
comboboxField.SetValue("10 january 2015");
