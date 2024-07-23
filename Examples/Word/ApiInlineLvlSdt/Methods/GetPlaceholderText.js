// This example shows how to get the placeholder text from the content control.
builder.CreateFile("docxf");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("Add a combo box to the next line (Forms -> Combo Box), copy the macro above (without the first and last two lines) and run it (Plugins -> Macros).");
oParagraph.AddElement(oRun);
var aForms = oDocument.GetAllForms();
oParagraph.RemoveElement(0);
var sText = aForms[0].GetPlaceholderText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Placeholder text: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docxf", "GetPlaceholderText.docxf");
builder.CloseFile();