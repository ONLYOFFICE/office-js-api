// Get the control data just as it would be filled in mapped xml in a document.

// How can I get the data for xml mapping using a block-level content control in a document?

// Get the data for xml mapping for a block-level content control in a document.

let doc = Api.GetDocument();
let contentControl = Api.CreateBlockLvlSdt();
contentControl.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, contentControl);

let data = contentControl.GetDataForXmlMapping();
let paragraph = Api.CreateParagraph();
paragraph.AddText(data);
doc.Push(paragraph);