// This example ctreates a range and sets bold for the first 9 characters.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.CreateRange(paragraph, 0, 11).SetBold(true);
