// Get the internal identifier of a form field widget in a PDF.

// How do I retrieve a widget's internal ID?

// Create a text field and print the internal ID of its widget.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Widget internal ID is: ${widgets[0].GetInternalId()}`);
