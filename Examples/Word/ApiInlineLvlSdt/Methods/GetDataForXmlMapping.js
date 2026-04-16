// Get the control data just as it would be filled in mapped xml in a document.

// How to get the data for xml mapping for an inline content control in a document?

// Get the data for xml mapping and display the result in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateInlineLvlSdt();
contentControl.AddText("This is an inline content control.");
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

let data = contentControl.GetDataForXmlMapping();
paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);