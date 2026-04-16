// Get text field and set regular expression validate for it in a PDF document.

// How do I set regular exp in a PDF document?

// Set regular exp using a combobox field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue("example@gmail.com");