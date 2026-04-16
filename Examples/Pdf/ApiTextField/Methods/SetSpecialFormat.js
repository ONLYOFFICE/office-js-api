// Get text field and set special format for it.

// How do I set special format in a PDF document?

// Set special format using a text field object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetSpecialFormat("phone");
textField.SetValue("1234567890");