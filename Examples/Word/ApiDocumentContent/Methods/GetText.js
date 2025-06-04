// This example gets a text from document content element.

// Get the text of the document content as a string.

// Display all content. 

let oDocument = Api.GetDocument();
let oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.Push(oBlockLvlSdt);
let oContent = oBlockLvlSdt.GetContent();
oContent.GetElement(0).AddText("This is a block text content control.");
let oPara = Api.CreateParagraph();
oPara.AddText("This text from DocContent element: " + oContent.GetText());
oDocument.Push(oPara);