// This example specifies that the contents of the current Range are displayed along with a line appearing directly below the character.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetUnderline(true);