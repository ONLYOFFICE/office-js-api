// This example specifies that all the text columns in the current section are of equal width.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
oSection.SetEqualColumns(3, 720);
oParagraph.AddText("This is a text split into 3 equal columns. ");
oParagraph.AddText("The columns are separated by the distance of half an inch.");
oParagraph.AddColumnBreak();
oParagraph.AddText("This text starts from column #2. ");
oParagraph.AddText("This sentence is used to add lines for demonstrative purposes.");
oParagraph.AddColumnBreak();
oParagraph.AddText("This text starts from column #3. ");
oParagraph.AddText("This sentence is used to add lines for demonstrative purposes.");