// This example showh how to get a table cell that contains the current content control.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
var oParagraph = Api.CreateParagraph();
oParagraph.AddElement(oInlineLvlSdt, 0);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.AddElement(0, oParagraph);
var oParentTableCell = oInlineLvlSdt.GetParentTableCell();
oParentTableCell.SetShd("clear", 255, 111, 61, false);