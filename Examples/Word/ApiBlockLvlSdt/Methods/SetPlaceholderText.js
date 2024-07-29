// This example sets the placeholder text to the content control.
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");