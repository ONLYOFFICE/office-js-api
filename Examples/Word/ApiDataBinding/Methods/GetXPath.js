// This example shows how to retrieve the prefix from data binding.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let id = xmlManager.Add(xmlText).id;
let blockLvl = Api.CreateBlockLvlSdt();
doc.InsertContent([blockLvl]);
let dataBinding = Api.CreateDataBinding('xmlns:pic="http://example.com/picture"', id, '/pic:documentData/pic:text');
blockLvl.SetDataBinding(dataBinding);
let paragraph = doc.GetElement(1);
paragraph.AddText(dataBinding.GetXPath());