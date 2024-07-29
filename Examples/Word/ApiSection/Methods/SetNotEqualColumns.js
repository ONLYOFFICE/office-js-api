// This example specifies that all the columns in the current section have the different widths.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
oSection.SetNotEqualColumns([1440, 2880, 4320], [720, 480]);
oParagraph.AddText("This is a text split into 3 non-equal columns. ");
oParagraph.AddText("The first column is 1 inch wide (1440 twentieths of a point).");
oParagraph.AddColumnBreak();
oParagraph.AddText("This text starts from column #2. ");
oParagraph.AddText("This column is 2 inches wide (2880 twentieths of a point). ");
oParagraph.AddText("The distance between this column and column #1 is half an inch (720 twentieths of a point).");
oParagraph.AddColumnBreak();
oParagraph.AddText("This text starts from column #3. ");
oParagraph.AddText("This column is 3 inches wide (4320 twentieths of a point). ");
oParagraph.AddText("The distance between this column and column #2 is 1/3 of an inch (480 twentieths of a point).");