//This example retrieves the value of the version attribute from the custom XML part.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let xml = xmlManager.Add('<content xmlms="http://example" version="1.0"></content>');
let version = xml.GetAttribute('/content', 'version');
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("The version attribute is: " + version);
doc.Push(infoParagraph);