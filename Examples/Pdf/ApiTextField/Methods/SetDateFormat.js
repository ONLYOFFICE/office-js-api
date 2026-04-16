// Get text field and set date format for it.

// How do I set date format in a PDF document?

// Set date format using a text field object.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");