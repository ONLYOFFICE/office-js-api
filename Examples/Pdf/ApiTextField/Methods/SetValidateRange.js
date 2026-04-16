// Get text field and set validate range for it in a PDF document.

// How to set validate range for a text field in a PDF document?

// Set validate range and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValidateRange(true, 0, true, 5);
textField.SetValue('10');