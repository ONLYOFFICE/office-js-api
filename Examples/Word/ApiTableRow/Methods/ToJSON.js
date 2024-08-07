// This example converts the ApiTableRowPr object into the JSON object.
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderBottom("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderRight("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderInsideV("single", 32, 0, 255, 111, 61);
oTable.SetTableBorderInsideH("single", 32, 0, 255, 111, 61);
oTable.SetWidth("percent", 100);
var oRow = oTable.GetRow(1);
var json = oRow.ToJSON();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The ApiTableRow object in the JSON format: ").SetBold(true);
oParagraph.AddLineBreak();
oParagraph.AddText(json);
oDocument.Push(oParagraph);