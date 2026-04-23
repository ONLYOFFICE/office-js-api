// Display lowercase letters as small capital letters within a selected text range in a document.

// How do I make text appear in small capitals without retyping it in a document?

// Format a portion of text so that lowercase characters render as reduced-size capitals in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 24);
range.SetSmallCaps(true);