// Read the appearance style of a checkbox in a PDF.

// How do I find out what symbol displays when a checkbox is selected in a PDF?

// Retrieve the check mark style used to indicate a selected checkbox in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Check style is: ' + widgets[0].GetCheckStyle());