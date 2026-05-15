// Display numbers with currency symbols and formatting in a PDF text field.

// How do I show dollar amounts and decimal places correctly in a PDF?

// Configure number formatting with currency and decimal precision in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetNumberFormat(0, "us", "black-minus", "$", true);
textField.SetValue('-1000.50');