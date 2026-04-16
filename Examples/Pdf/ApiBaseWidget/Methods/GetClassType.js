// Find out the class type of a widget object in a PDF document.

// How can I get the class type of a widget in a PDF document?

// Get the class type of a widget and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
textField.SetValue(widgets[0].GetClassType());