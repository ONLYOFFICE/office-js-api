// Create a dropdown field with multiple options in a PDF.

// How do I add a combobox to a form in a PDF?

// Populate a dropdown list with selectable choices in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let comboboxField = Api.CreateComboboxField([10, 10, 160, 32]);
page.AddObject(comboboxField);
comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');