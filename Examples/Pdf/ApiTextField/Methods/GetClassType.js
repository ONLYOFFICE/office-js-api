// Determine the object type of a text field in a PDF.

// How do I find out what class a text field belongs to in a PDF?

// Identify the type category of a text input box in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue(textField.GetClassType());