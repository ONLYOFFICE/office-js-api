// Format field values as phone numbers in a PDF.

// Can I make phone numbers display correctly in a PDF?

// Apply phone number formatting to a field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

comboboxField.SetSpecialFormat("phone");
comboboxField.SetValue("1234567890");