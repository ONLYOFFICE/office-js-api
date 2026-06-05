// Set a tooltip for a form field in a PDF.

// How do I add helper text to a field?

// Assign a tooltip to a text field.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTooltip("Enter your full name");
