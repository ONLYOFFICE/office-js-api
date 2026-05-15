// Retrieve all choices available in a dropdown field in a PDF.

// How do I get all options from a list field in a PDF?

// List all items in a dropdown or list field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.AddOption('Option 1');
comboboxField.AddOption('Option 2');
comboboxField.AddOption('Option 3');
let options = comboboxField.GetOptions();
console.log('Combobox options is: ' + options);