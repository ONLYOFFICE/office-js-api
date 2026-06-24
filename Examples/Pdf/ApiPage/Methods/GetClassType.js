// Identify the object type of a page in a PDF.

// Useful for determining what kind of object this is in a PDF.

// Retrieve the classification name for this element in a PDF.

let doc = Api.GetDocument();
doc.AddPage();
let page = doc.GetPage(doc.GetPagesCount() - 1);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());
