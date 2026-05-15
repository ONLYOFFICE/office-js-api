// Format dates the way users expect to see them in a PDF text field.

// How do I make sure dates display in a specific format in a PDF?

// Apply a date format pattern to a text field in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetDateFormat("dd.mm.yyyy");
textField.SetValue("10 january 2015");