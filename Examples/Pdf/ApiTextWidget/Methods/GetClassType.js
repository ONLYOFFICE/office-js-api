// Check the class type returned by a text widget in a PDF document.

// How do I check what type a text widget object is in a PDF document?

// Retrieve and output the class type string for a text widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let comboboxField = Api.CreateComboboxField([10, 10, 160, 30]);
page.AddObject(comboboxField);

let widgets = comboboxField.GetAllWidgets();
comboboxField.SetValue(widgets[0].GetClassType());