// Get the allowed symbols of a text field in a document.

// Create a text form, set allowed symbols, then retrieve and display them in the document.

// How to get the allowed symbols of the text form object.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Letters", placeholder: "Letters only" });
textForm.SetAllowedSymbols("abcdefghijklmnopqrstuvwxyz");
let allowedSymbols = textForm.GetAllowedSymbols();
let paragraph = doc.GetElement(0);
paragraph.AddText("Allowed symbols: " + allowedSymbols);
paragraph.Push(textForm);