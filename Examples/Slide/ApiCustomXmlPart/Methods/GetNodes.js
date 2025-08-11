// This example shows how to get nodes from a custom XML part using XPath.

// How to get nodes from an XML part using XPath.

// Get XML nodes.

let oPresentation = Api.GetPresentation();
let xmlManager = oPresentation.GetCustomXmlParts();
let xml = xmlManager.Add("<products><item>Laptop</item><item>Mouse</item><item>Keyboard</item></products>");
let itemNodes = xml.GetNodes('/products/item');
let oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
let oDocContent = oShape.GetDocContent();
let oParagraph = oDocContent.GetElement(0);
let oRun = Api.CreateRun();
oRun.SetFontSize(60);
let displayText = "Found " + itemNodes.length + " products:";
for (let i = 0; i < itemNodes.length; i++) {
    displayText += "\n" + (i + 1) + ". " + itemNodes[i].GetText();
}
oRun.AddText(displayText);
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);