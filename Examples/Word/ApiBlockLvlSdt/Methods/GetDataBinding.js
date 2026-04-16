// Retrieve a data binding from a content control in a document.

// How can I get the data binding using a block-level content control in a document?

// Get the data binding for a block-level content control in a document.

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