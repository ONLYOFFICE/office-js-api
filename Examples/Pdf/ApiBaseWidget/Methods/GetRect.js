// Get the bounding box dimensions of a form field widget in a PDF.

// How do I find the size and position of a widget in a PDF?

// Retrieve the rectangle boundaries of a form field widget in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let widgets = textField.GetAllWidgets();
console.log(`Annotation rect is: ${widgets[0].GetRect()}`);