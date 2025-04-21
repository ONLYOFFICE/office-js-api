// This example shows how to load values from a data binding link.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let xmlManager = doc.GetCustomXmlParts();
let xmlText = `
<?xml version="1.0" encoding="UTF-8"?>
<pic:documentData xmlns:pic="http://example.com/picture">
  <pic:text>123</pic:text>
</pic:documentData>`;
let xml = xmlManager.Add(xmlText);
let dataBinding = Api.CreateDataBinding('xmlns:pic="http://example.com/picture"', xml.id, '/pic:documentData/pic:text');
inlineLvlSdt.SetDataBinding(dataBinding);
let nodes = xml.GetNodes('/pic:documentData/pic:text');
let node = nodes[0];
node.SetText('987');
inlineLvlSdt.LoadFromDataBinding();