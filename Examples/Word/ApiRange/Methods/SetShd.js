// Specify the shading applied to the contents of the current text Range in a document.

// How to set a shading for a range text in a document.

// Get a range text, specify its shading options in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetShd("clear", Api.HexColor('#FF6F3D'));