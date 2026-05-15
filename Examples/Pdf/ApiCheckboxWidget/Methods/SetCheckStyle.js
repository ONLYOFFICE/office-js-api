// Change the check symbol appearance of a checkbox widget in a PDF.

// How do I customize what symbol appears inside a checked checkbox in a PDF?

// Apply a visual style to a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetCheckStyle('square');