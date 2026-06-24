// Retrieve the sequential position of a page in a PDF.

// Useful for finding which page number a page is in a PDF.

// Access the page position to identify its location in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page index is: ' + page.GetIndex());
