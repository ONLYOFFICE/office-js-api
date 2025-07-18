// This example gets a class type and pastes it into the document.

// How to get a class type of ApiWatermarkSettings.

// Retrieve class type of ApiWatermarkSettings object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);