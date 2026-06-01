// Get the class type of a checkbox widget in a PDF.

// How do I find out what class type a checkbox widget is in a PDF?

// Identify a checkbox widget object by its class type identifier in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());