// This example sets the vertical alignment to the table.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The table was added to the bottom of the page. Scroll down to see it."); 
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.SetWrappingStyle(false);
oTable.SetTableBorderTop("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
oTable.SetTableBorderRight("single", 4, 0, 51, 51, 51);
oTable.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
oTable.SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
oTable.SetVAlign("bottom");