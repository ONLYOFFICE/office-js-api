// This example specifies the border which will be displayed at the left side of the page around the specified paragraph.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first paragraph. We will add a two point orange border at its left side. ");
oParagraph.AddText("The space between the left side of the paragraph and the border is 8 points. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetLeftBorder("single", 16, 8, 255, 111, 61);