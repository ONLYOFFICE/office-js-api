// This example shows how to delete the current XML node.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content><text>First</text><text>Second</text></content>');
let textNode = xml.GetNodes('/content/text')[0];
textNode.Delete();
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("XML text: " + xml.GetXml());
doc.Push(infoParagraph);