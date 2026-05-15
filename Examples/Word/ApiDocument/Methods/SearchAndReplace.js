// Find a word and replace it with another word throughout a document.

// How do I perform a find-and-replace operation in a document?

// Update outdated wording in bulk by substituting one string with another in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
doc.SearchAndReplace({"searchString": "first", "replaceString": "second"});