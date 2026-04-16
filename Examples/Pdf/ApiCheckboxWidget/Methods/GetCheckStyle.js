// Get checkbox widget check style in a PDF document.

// How can I get the check style using a checkbox widget in a PDF document?

// Get the check style for a checkbox widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Check style is: ' + widgets[0].GetCheckStyle());