// Read the complete name identifier of a form field in a PDF.

// How do I retrieve the full name assigned to a form field in a PDF?

// Display the unique full name property of a form field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue('Field full name is: ' + textField.GetFullName());