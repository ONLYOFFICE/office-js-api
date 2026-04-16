// Retrieve the class type of a checkbox widget in a PDF document.

// How to identify the class type of a checkbox widget in a PDF document?

// Obtain the class type identifier of a checkbox widget object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let radiobuttonField = Api.CreateRadiobuttonField([10, 10, 25, 25]);
page.AddObject(radiobuttonField);

let widgets = radiobuttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());