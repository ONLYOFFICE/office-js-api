// Find out the class type of a text field object in a PDF document.

// How can I get the class type of a text field in a PDF document?

// Get the class type of a text field and display it in the PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue(textField.GetClassType());