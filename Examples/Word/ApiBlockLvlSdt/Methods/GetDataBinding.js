// Read the XML data binding linked to a content control in a document.

// How do I get the XML data binding attached to a content control in a document?

// Inspect which XML source a content control is connected to and display its ID in a document.

let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let partId = xmlManager.Add(xmlText).GetId();
let contentControl = Api.CreateBlockLvlSdt();
doc.Push(contentControl);
contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : partId,
  xpath : "/pic:documentData/pic:text"
});
let dataBinding = contentControl.GetDataBinding();
let paragraph = Api.CreateParagraph();
paragraph.AddText(dataBinding.storeItemID);
doc.Push(paragraph);