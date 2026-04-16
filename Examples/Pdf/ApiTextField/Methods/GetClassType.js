// Retrieve the class type of a text field in a PDF document.

// How to identify the class type of a text field in a PDF document?

// Obtain the class type identifier of a text field object in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetValue(textField.GetClassType());