// This example shows how to retrieve custom XML parts by their namespace.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = '<content xmlns="http://example.com"><text>Example XML</text></content>';
let xml = xmlManager.Add(xmlText);
let namespace = "http://example.com";
let xmlParts = xmlManager.GetByNamespace(namespace);
let infoParagraph = Api.CreateParagraph();
xmlParts.forEach(part => {
    infoParagraph.AddText("XML part: " + part.GetXml());
});
doc.Push(infoParagraph);