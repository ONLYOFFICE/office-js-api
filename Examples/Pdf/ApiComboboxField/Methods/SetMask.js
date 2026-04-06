// This example gets text field and sets mask for entered text for it.
let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetMask("(999)999-9999");
comboboxField.SetValue("(123)456-7890");
