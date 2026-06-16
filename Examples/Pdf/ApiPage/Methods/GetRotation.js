// Check the current rotation angle applied to a page in a PDF.

// How do I determine if a page is rotated in a PDF?

// Read the page's rotation setting to display its current orientation in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page rotate is: ' + page.GetRotation());
