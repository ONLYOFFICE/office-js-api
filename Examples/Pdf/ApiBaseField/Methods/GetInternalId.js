// Get the internal identifier of a form field in a PDF.

// How do I retrieve a field's internal ID?

// Create a text field and print its internal ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

console.log(`Field internal ID is: ${textField.GetInternalId()}`);
