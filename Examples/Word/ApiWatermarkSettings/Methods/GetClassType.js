// Retrieve the class type of a watermark settings in a document.

// How to identify the class type of a watermark settings in a document?

// Obtain the class type identifier of a watermark settings object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);