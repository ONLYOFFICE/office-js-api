// Read the type identifier of a watermark settings object in a document.

// How do I find out what kind of object holds the watermark configuration in a document?

// Confirm the category of watermark settings by printing its type label in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);