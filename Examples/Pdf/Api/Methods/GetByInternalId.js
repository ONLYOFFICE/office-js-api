// Get an object by its internal ID in a PDF.

// How do I find a PDF API object by its internal identifier?

// Create a field, get its internal ID, and retrieve the same field by that ID.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 30]);
page.AddObject(textField);

let internalId = textField.GetInternalId();
let fieldById = Api.GetByInternalId(internalId);
fieldById.SetValue("Field was found by internal ID");
