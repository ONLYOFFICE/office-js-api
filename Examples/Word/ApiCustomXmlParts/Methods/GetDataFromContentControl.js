// This example shows how to get XML data from a content control.
let doc = Api.GetDocument();
let xmlManager = doc.GetCustomXmlParts();
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is a inline text content control.");
let inlineText = xmlManager.GetDataFromContentControl(inlineLvlSdt);
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
let blockText = xmlManager.GetDataFromContentControl(blockLvlSdt);
let infoParagraph = Api.CreateParagraph();
infoParagraph.AddText("Text form inlineLevelSdt: " + inlineText + "\r\n\n\n");
infoParagraph.AddText("Text form blockLevelSdt: " + blockText + "\r\n");
doc.Push(infoParagraph);