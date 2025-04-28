// This example shows how to update the value of an attribute in a custom XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example" version="1.0"></content>');
xml.UpdateAttribute('/content', 'version', '2.0');
let version = xml.GetAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);