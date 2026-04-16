// Get text field and set time format for it.

// How do I set time format in a PDF document?

// Set time format using a text field object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetTimeFormat("12HR:MM:SS");
textField.SetValue("8:45:30");