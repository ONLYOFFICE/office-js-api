// Add a hint text that appears before you type in a combobox field in a PDF.

// How do I add a hint text to an empty combobox field in a PDF?

// Configure what example text shows when a combobox field is empty in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetPlaceholder("Your text here");
