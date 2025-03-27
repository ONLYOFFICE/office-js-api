// This example specifies that the contents of the current Range are displayed with a single horizontal line through the range center.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Server Builder");
let range = doc.GetRange(18, 23);
range.SetStrikeout(true);