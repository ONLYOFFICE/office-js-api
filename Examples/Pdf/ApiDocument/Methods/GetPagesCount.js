// Count the total number of pages in a PDF.

// How do I find out how many pages my PDF has?

// Show the page count in a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetPagesCount());