// This example demonstrates how to create a data binding for a block-level content control.
let doc = Api.GetDocument();
let xmlParts = doc.GetCustomXmlParts();
let xml = xmlParts.Add('<root xmlns="http://example.com"><data>Value</data></root>');
let dataBinding = Api.CreateDataBinding(
    'xmlns:ns="http://example.com"',
    xml.GetId(),
    "/ns:root/ns:data"
);
let paragraph = Api.CreateParagraph();
let sdt = Api.CreateBlockLvlSdt(paragraph);
sdt.SetDataBinding(dataBinding);
doc.AddElement(0, sdt);