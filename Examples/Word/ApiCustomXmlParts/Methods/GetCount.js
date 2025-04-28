// This example shows how to get the count of custom XML parts in the XML manager.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xmlText = '<content><text>Sample XML part</text></content>';
let xml = xmlManager.Add(xmlText);
let count = xmlManager.GetCount();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("There are " + count + " custom XML parts in the document.");
doc.Push(infoParagraph);