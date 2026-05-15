// Retrieve the between border settings applied to a paragraph style in a document.

// How do I read the between border from a paragraph's formatting in a document?

// Useful when you need to inspect border details such as type and size set between paragraphs.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBetweenBorder("single", 24, 0, 255, 111, 61);
let border = paraPr.GetBetweenBorder();
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with a between border.");
let paragraph2 = Api.CreateParagraph();
paragraph2.SetStyle(myStyle);
paragraph2.AddText("Between border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);