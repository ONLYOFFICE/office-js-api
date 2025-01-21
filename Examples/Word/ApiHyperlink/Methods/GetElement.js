// This example shows how to get the hyperlink element using the position specified.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let run1 = Api.CreateRun();
run1.AddText("Api Document Builder.");
paragraph.AddElement(run1, 0);
let run2 = Api.CreateRun();
run2.AddText(" ONLYOFFICE for developers");
paragraph.AddElement(run2, 1);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
let element = hyperlink.GetElement(1);
paragraph = Api.CreateParagraph();
paragraph.AddElement(element);
document.Push(paragraph);