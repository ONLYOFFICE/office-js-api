// This example shows how to update an XML element in a custom XML part.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add("<content xmlns='http://example'><text>Example</text></content>");
xml.UpdateElement("/content/", "<user>John</user>");
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);