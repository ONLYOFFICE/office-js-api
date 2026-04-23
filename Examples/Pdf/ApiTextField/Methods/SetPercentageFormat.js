// Convert and display numbers as percentages in a PDF text field.

// How do I show decimal values as percentages in a PDF?

// Apply percentage formatting to text input in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

textField.SetPercentageFormat(0, "us");
textField.SetValue(10);