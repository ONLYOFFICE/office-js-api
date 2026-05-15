// Check if a combobox field allows user editing in a PDF.

// How do I enable or check if a combobox field is editable in a PDF?

// Set a field to editable and display its editable state in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetEditable(true);
comboboxField.SetValue('Editable is: ' + comboboxField.IsEditable());