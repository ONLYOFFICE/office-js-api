// Define the value that gets submitted when a checkbox is selected in a PDF.

// How do I set what data is recorded when someone checks a checkbox in a PDF?

// Assign an export value to a checkbox widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
widgets[0].SetExportValue('Export value');
console.log('Export value is: ' + widgets[0].GetExportValue());