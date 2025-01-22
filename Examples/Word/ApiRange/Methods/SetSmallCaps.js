// This example specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(10, 24);
range.SetSmallCaps(true);