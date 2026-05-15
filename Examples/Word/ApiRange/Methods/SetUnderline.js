// Add an underline beneath a selected portion of text in a document.

// How do I draw a line under specific words to emphasize them in a document?

// Highlight key phrases by placing a continuous underline below the chosen text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetUnderline(true);