// Create a date input field in a PDF form.

// How do I add a date picker to a form in a PDF?

// Set a default date value in a date field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let dateField = Api.CreateDateField([10, 10, 160, 32]);
page.AddObject(dateField);
dateField.SetValue('01.01.2025');