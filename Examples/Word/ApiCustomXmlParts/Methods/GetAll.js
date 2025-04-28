// This example shows how to retrieve all custom XML parts in the document and display them.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText1 = '<content><text>First XML part</text></content>';
let xmlText2 = '<content><text>Second XML part</text></content>';
let xml1 = xmlManager.Add(xmlText1);
let xml2 = xmlManager.Add(xmlText2);
let allXmlParts = xmlManager.GetAll();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("All custom XML parts: " + allXmlParts.map(xml => xml.GetXml()).join(", "));
doc.Push(infoParagraph);