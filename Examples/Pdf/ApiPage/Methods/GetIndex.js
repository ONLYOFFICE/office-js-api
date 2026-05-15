// Retrieve the sequential position of a page in a PDF.

// How do I find which page number I'm on in a PDF?

// Access the page position to identify its location in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page index is: ' + page.GetIndex());