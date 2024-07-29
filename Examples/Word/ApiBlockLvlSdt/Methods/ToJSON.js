// This example converts the ApiBlockLvlSdt object into the JSON object.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.SetAlias("№1");
var json = oBlockLvlSdt.ToJSON(false, true);
var oBlockLvlSdtFromJSON = Api.FromJSON(json);
oBlockLvlSdtFromJSON.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdtFromJSON);