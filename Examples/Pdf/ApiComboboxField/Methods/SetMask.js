// Get text field and set mask for entered text for it in a PDF document.

// How can I set mask using a combobox field in a PDF document?

// Set mask for a combobox field in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetMask("(999)999-9999");
comboboxField.SetValue("(123)456-7890");