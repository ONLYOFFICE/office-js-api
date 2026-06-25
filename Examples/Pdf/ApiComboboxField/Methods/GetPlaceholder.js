// Retrieve the placeholder text from a combobox field in a PDF.

// Useful for reading the hint text in a combobox field in a PDF.

// Access the placeholder message displayed in a combobox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetPlaceholder("Your text here");
comboboxField.SetValue('Combobox field placeholder is: "' + comboboxField.GetPlaceholder() + '"');
