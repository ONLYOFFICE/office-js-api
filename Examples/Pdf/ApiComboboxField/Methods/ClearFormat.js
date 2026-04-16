// Get text field and set number format for it and then clear format.

// How do I clear format in a PDF document?

// Clear format using a combobox field object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000');
comboboxField.ClearFormat();