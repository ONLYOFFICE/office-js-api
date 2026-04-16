// Restrict input to a specific set of characters in a text field in a document.

// Create a text form, set allowed symbols to digits only, and add it to the document.

// How to set the allowed symbols of the text form object.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Digits", placeholder: "Digits only" });
textForm.SetAllowedSymbols("0123456789");
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form accepting digits only: ");
paragraph.Push(textForm);