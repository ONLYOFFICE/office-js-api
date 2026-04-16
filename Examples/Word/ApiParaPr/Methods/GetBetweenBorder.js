// Get the between border properties of the current paragraph in a document.

// Get the between border of the paragraph and display its type in the document.

// How to get the between border of the paragraph properties object in a document.

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