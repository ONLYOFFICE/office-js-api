// Restrict a text field to accept only a specific set of characters in a document.

// How do I limit which characters a user can type into a text field in a document?

// Prevent unwanted input by defining the exact characters allowed in a text field in a document.

let doc = Api.GetDocument();
let textForm = Api.CreateTextForm({ key: "Digits", placeholder: "Digits only" });
textForm.SetAllowedSymbols("0123456789");
let paragraph = doc.GetElement(0);
paragraph.AddText("Text form accepting digits only: ");
paragraph.Push(textForm);