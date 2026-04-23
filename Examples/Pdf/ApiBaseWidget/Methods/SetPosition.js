// Move a widget to a new position in a PDF.

// How do I change the position of a widget in a PDF?

// Reposition a field widget using coordinate values in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
widgets[0].SetPosition({x: 30, y: 30});