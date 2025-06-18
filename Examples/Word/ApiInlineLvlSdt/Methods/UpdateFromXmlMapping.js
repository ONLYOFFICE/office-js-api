// This example demonstrates how to load data from Custom XML into an inline content control using data binding.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let xmlPart = xmlManager.Add(xmlText);
let contentControl = Api.CreateInlineLvlSdt();
let paragraph = doc.GetElement(0);
paragraph.Push(contentControl);

contentControl.SetDataBinding({
  prefixMapping : "xmlns:pic='http://example.com/picture'",
  storeItemID : xmlPart.GetId(),
  xpath : "/pic:documentData/pic:text"
});

let nodes = xmlPart.GetNodes('/pic:documentData/pic:text');
let node = nodes[0];
node.SetText('987');

contentControl.UpdateFromXmlMapping();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText(paragraph.GetText());
doc.Push(paragraph2);