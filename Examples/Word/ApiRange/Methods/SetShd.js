// This example specifies the shading applied to the contents of the current text Range.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetShd("clear", 255, 111, 61);