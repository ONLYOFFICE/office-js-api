// This example shows how to get the allowed symbols of a text field.

// Create a text form, set allowed symbols, then retrieve and display them in the document.

// How to get the allowed symbols of the ApiTextForm object.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Letters", placeholder: "Letters only" });
textForm.SetAllowedSymbols("abcdefghijklmnopqrstuvwxyz");
let allowedSymbols = textForm.GetAllowedSymbols();
let paragraph = doc.GetElement(0);
paragraph.AddText("Allowed symbols: " + allowedSymbols);
paragraph.Push(textForm);
