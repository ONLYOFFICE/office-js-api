// This example wraps the current table object with a content control.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oBlockLvlSdt = oTable.InsertInContentControl(1);
oDocument.AddElement(0, oBlockLvlSdt);