// Get document pages count and display it in text field.

// How can I get the pages count using a document in a PDF document?

// Get the pages count for a document in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetPagesCount());