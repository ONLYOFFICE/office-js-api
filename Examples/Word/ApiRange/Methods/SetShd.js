// Apply a background color to a selected portion of text in a document.

// How do I highlight a range of words with a custom background shade in a document?

// Color the area behind specific text to make it stand out visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetShd("clear", Api.HexColor('#FF6F3D'));