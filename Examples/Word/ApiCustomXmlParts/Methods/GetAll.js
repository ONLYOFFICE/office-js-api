// This example shows how to retrieve all custom XML parts in the document and display them.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText1 = '<products><item><name>Laptop</name><price>999</price></item></products>';
let xmlText2 = '<user><name>John Doe</name><email>john@example.com</email></user>';

let xml1 = xmlManager.Add(xmlText1);
let xml2 = xmlManager.Add(xmlText2);

let allXmlParts = xmlManager.GetAll();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("All custom XML parts: " + allXmlParts.map(xml => xml.GetXml()).join(", "));
doc.Push(infoParagraph);