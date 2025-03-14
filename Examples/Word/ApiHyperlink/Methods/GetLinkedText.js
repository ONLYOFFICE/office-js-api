// This example shows how to get the hyperlink address.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("ONLYOFFICE Document Builder");
paragraph.AddElement(run);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
hyperlink.SetLink("https://api.onlyoffice.com/");
let linkedText = hyperlink.GetLinkedText();
paragraph = Api.CreateParagraph();
paragraph.AddText("Linked text: " + linkedText);
doc.Push(paragraph);