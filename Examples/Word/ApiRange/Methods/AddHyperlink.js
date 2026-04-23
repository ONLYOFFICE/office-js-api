// Turn a selected portion of text into a clickable hyperlink in a document.

// How do I attach a web address to a specific word or phrase in a document?

// Make a passage navigable by binding it to an external URL in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddHyperlink("https://www.onlyoffice.com/", "Main portal");