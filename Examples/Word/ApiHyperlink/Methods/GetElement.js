// This example shows how to get the hyperlink element using the position specified.

// How to get the element of the hyperlink knowing its index.

// Add a hyperlink to the paragraph and get its element.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
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
doc.Push(paragraph);