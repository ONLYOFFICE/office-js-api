// How to create and add a combobox field to document.
let doc = Api.GetDocument();
let page = doc.GetPage(0);

let comboboxField = Api.CreateComboboxField([10, 10, 160, 32]);
page.AddObject(comboboxField);
comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');