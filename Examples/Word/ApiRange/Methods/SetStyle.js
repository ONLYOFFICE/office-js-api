// Apply a named style to a selected portion of text in a document.

// How do I give a range of words a predefined look such as a heading style in a document?

// Reformat highlighted text by assigning it one of the built-in styles available in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
let style = doc.GetStyle("Heading 2");
range.SetStyle(style);