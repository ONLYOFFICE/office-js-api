// Read a form field tooltip in a PDF.

// How do I get the helper text assigned to a field?

// Set a field tooltip and read it back.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTooltip("Enter your full name");
textField.SetValue(textField.GetTooltip());
