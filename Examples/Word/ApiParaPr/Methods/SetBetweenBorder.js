// This example specifies the border which will be displayed between each paragraph in a set of paragraphs which have the same set of paragraph border settings.

// How to set the border between paragraphs.

// Create a paragraph, add text to it and the single border between the text.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBetweenBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border between paragraphs.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the second paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the third paragraph. ");
paragraph.AddText("No need to add anything additionally to it. ");
paragraph.AddText("The borders between the paragraphs have already been set.");
doc.Push(paragraph);