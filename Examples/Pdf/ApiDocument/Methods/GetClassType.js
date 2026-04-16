// Check the class type returned by a document.

// How do I check what type a document object is?

// Retrieve and output the class type string for a document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetClassType());