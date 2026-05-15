// Read whether the watermark is text or an image in a document.

// How do I find out what kind of watermark is applied in a document?

// Determine the category of the watermark currently used in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Type = " + classType);
doc.Push(paragraph);