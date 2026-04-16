// Find out the class type of a watermark settings object in a document.

// How can I get the class type of a watermark settings in a document?

// Get the class type of a watermark settings and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);