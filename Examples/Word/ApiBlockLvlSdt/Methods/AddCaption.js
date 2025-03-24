// This example adds a caption paragraph after (or before) the current content control.

// Adds a figure caption after the block content control and sets the Arabic caption numbering format.

// How to add a caption for the ApiBlockLvlSdt object.

// Creates a block content control, adds a paragraph with an image to it, and adds a figure caption for the current content control.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let paragraph = Api.CreateParagraph();
let image = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(image);
blockLvlSdt.AddElement(paragraph, 0);
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");