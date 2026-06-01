// Apply a background highlight color to all content controls in a document.

// How do I change the highlight color of content controls in a document?

// Make form controls stand out visually by setting a custom fill color across the whole document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(Api.HexColor('#FFEFBF'));
