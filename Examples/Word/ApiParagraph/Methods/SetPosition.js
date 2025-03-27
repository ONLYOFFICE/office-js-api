// This example specifies an amount by which text is raised or lowered for this paragraph in relation to the default baseline of the surrounding non-positioned text.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. ");
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is a paragraph with the text lowered 15 points (30 half-points).");
doc.Push(paragraph2);
paragraph2.SetPosition(-30);