// This example get the text properties from the Range.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Welcome to ONLYOFFICE Document Builder");

// Get the text properties of the first range
var oRange1 = oDocument.GetRange(0, 31);
var oTextPr = oRange1.GetTextPr();

// Modify the text properties (e.g., set italic)
oTextPr.SetItalic(true);

// Apply the modified text properties to another range
var oRange2 = oDocument.GetRange(32, 63);
oRange2.SetTextPr(oTextPr);

// Add a new paragraph to confirm the changes
var oNewParagraph = Api.CreateParagraph();
oNewParagraph.AddText("This text is in italic as per the modified text properties.");
oDocument.Push(oNewParagraph);
