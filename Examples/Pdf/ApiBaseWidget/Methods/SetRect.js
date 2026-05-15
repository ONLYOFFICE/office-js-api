// Resize and reposition a widget using rectangular boundaries in a PDF.

// How do I set the size and position of a widget in a PDF?

// Define a widget's location and dimensions with boundary coordinates in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetRect([30, 30, 160, 60]);