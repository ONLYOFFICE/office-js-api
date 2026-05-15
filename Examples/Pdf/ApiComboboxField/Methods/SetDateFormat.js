// Format dates in a combobox field in a PDF.

// Can I control how dates appear in a PDF?

// Display dates with a specific format in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetDateFormat("dd.mm.yyyy");
comboboxField.SetValue("10 january 2015");