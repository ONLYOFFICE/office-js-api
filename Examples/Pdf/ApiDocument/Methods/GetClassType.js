// Identify the type of a PDF document object.

// What kind of object am I working with in a PDF?

// Display the classification of a PDF document in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(doc.GetClassType());