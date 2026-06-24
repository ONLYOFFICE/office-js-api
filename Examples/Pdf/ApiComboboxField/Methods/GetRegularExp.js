// Retrieve the validation pattern from a combobox field in a PDF.

// Useful for accessing the validation pattern from a combobox field in a PDF.

// Display what text pattern is required for a combobox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetRegularExp("\\S+@\\S+\\.\\S+");
comboboxField.SetValue('Combobox field reg exp is: "' + comboboxField.GetRegularExp() + '"');
