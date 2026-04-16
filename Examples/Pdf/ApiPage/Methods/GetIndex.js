// Get page index of the first page in document and display it in the text field.

// How can I get the index using a page in a PDF document?

// Get the index for a page in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue('Page index is: ' + page.GetIndex());