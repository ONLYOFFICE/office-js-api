// Get the height of a page in a PDF.

// How do I find out the vertical size of a page in a PDF?

// Read the page height in points to display it in a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page height is: ' + page.GetHeight());
