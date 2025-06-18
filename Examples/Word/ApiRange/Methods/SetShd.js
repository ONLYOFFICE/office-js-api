// This example specifies the shading applied to the contents of the current text Range.

// How to set a shading for a range text.

// Get a range text, specify its shading options.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetShd("clear", 255, 111, 61);