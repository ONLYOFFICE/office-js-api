// Access the text formatting applied to the paragraph end mark in a document.

// How do I retrieve the text properties of the paragraph mark in a document?

// Change the font size, color, and spacing of the invisible paragraph mark symbol in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the font size, font color and spacing for the paragraph mark. ");
paragraph.AddText("You can see it if you download the document, open it and enable the invisible symbols display.");
let paragraphMarkTextPr = paragraph.GetParagraphMarkTextPr();
paragraphMarkTextPr.SetFontSize(52);
paragraphMarkTextPr.SetColor(Api.HexColor('#FFFF00'));
paragraphMarkTextPr.SetSpacing(5);