// This example sSpecifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge of the parent table.
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add the inside horizontal 4 point orange borders:");
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableBorderTop("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderLeft("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderRight("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
oTable.SetTableBorderInsideH("single", 32, 0, 255, 111, 61);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableBorderInsideH.docx");
builder.CloseFile();