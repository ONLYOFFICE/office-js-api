// Find out the class type of a text widget object in a PDF document.

// How can I get the class type of a text widget in a PDF document?

// Get the class type of a text widget and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
comboboxField.SetValue(widgets[0].GetClassType());