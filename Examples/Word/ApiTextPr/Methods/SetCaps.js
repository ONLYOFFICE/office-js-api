// This example specifies that any lowercase characters in the text run are formatted for display only as their capital letter character equivalents.
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetCaps(true);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text set to capital letters using the text properties.");