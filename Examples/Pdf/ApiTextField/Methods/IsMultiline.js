// Check whether a text field allows multiple lines of text in a PDF.

// How do I determine if a text field accepts multiple lines in a PDF?

// Verify if text wrapping is enabled for a text input field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetMultiline(true);
textField.SetValue('Multiline is: ' + textField.IsMultiline());