// Get text field and set time format for it.

// How do I set time format in a PDF document?

// Set time format using a combobox field object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetTimeFormat("12HR:MM:SS");
comboboxField.SetValue("8:45:30");