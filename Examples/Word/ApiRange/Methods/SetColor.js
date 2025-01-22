// This example sets the text color to the text Range in the RGB format.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetColor(255, 111, 61);