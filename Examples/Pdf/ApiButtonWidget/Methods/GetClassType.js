// Identify the class type of a button widget in a PDF.

// How do I determine what type a button widget object is in a PDF?

// Get the object type information for a button widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());