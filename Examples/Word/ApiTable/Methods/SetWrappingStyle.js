// This example sets the table wrapping style.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text.");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
oDocument.Push(oTable1);
oTable1.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 1");
var oTable2 = Api.CreateTable(3, 3);
oTable2.SetWidth("percent", 100);
oTable2.SetStyle(oTableStyle);
oDocument.Push(oTable2);
oTable2.GetCell(0, 0).GetContent().GetElement(0).AddText("Table 2");
oParagraph.AddLineBreak();
oParagraph.AddText("The tables were added to the paragraph. Table 1 is inline and Table 2 is not.");
oTable1.SetWrappingStyle(true);
oTable2.SetWrappingStyle(false);