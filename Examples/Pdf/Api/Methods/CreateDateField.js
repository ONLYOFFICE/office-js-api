// How to create and add a text field with date picker to document.

// How do I create the date field in a PDF document?

// Create the date field and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let dateField = Api.CreateDateField([10, 10, 160, 32]);
page.AddObject(dateField);
dateField.SetValue('01.01.2025');