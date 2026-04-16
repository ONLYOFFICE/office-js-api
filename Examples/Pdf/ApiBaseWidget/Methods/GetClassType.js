// Retrieve the class type of a widget in a PDF document.

// How to identify the class type of a widget in a PDF document?

// Obtain the class type identifier of a widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
textField.SetValue(widgets[0].GetClassType());