// Identify the object type of a page in a PDF.

// How do I determine what kind of object this is in a PDF?

// Retrieve the classification name for this element in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());