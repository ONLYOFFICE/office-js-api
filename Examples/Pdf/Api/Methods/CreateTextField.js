// Add a text field to a page in a PDF.

// How do I add a text field to a PDF?

// Create a text field, insert it into a page, and set its value in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);

let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('This is the text field');