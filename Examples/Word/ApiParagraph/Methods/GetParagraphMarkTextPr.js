// This example shows how to get the text properties of the paragraph mark which is used to mark the paragraph end.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("We set the font size, font color and spacing for the paragraph mark. ");
paragraph.AddText("You can see it if you download the document, open it and enable the invisible symbols display.");
let paragraphMarkTextPr = paragraph.GetParagraphMarkTextPr();
paragraphMarkTextPr.SetFontSize(52);
paragraphMarkTextPr.SetColor(255, 255, 0, false);
paragraphMarkTextPr.SetSpacing(5);