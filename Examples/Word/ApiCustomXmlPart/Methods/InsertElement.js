// This example shows how to insert a new XML element into the custom XML part.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example"></content>');
xml.InsertElement('/content', '<text>example_text</text>');
xml.InsertElement('/content', '<firstNode>text inside first node</firstNode>', 0);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Xml string representaion: " + xml.GetXml());
doc.Push(infoParagraph);