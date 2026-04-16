// Check the class type returned by a button widget in a PDF document.

// How do I check what type a button widget object is in a PDF document?

// Retrieve and output the class type string for a button widget in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let buttonField = Api.CreateImageField([10, 10, 25, 25]);
page.AddObject(buttonField);

let widgets = buttonField.GetAllWidgets();
console.log('Widget type is: ' + widgets[0].GetClassType());