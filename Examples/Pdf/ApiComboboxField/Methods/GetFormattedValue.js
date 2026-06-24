// Get the formatted value of a combobox field in a PDF.

// Useful for retrieving a currency value as it appears in a PDF combobox field.

// Read the displayed value of a formatted combobox field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
let resultField = Api.CreateTextField([10, 40, 160, 60]);
page.AddObject(comboboxField);
page.AddObject(resultField);

comboboxField.SetNumberFormat(0, "us", "black-minus", "$", true);
comboboxField.SetValue('-1000.50');
resultField.SetValue(comboboxField.GetFormattedValue());
