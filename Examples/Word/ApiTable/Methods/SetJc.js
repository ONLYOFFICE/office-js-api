// This example specifies the alignment of the table with respect to the text margins in the current section.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The table is aligned at the center of the page horizontally.");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 50);
oTable.SetStyle(oTableStyle);
oTable.SetJc("center");
oDocument.Push(oTable);