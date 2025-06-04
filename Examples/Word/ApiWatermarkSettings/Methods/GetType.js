// This example gets a watermark type and pastes it into the document.

// How to get type of the watermark.

// Display the name of the watermark style.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Type = " + classType);
doc.Push(paragraph);