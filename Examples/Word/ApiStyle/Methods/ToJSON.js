// This example converts the ApiStyle object into the JSON object.
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.GetStyle("Bordered");
var json = oTableStyle.ToJSON(false);
var oStyleFromJSON = Api.FromJSON(json);
oStyleFromJSON.SetName("My Custom Style");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oStyleFromJSON);
oDocument.Push(oTable);