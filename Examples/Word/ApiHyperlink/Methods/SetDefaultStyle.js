// Apply the default built-in style to a hyperlink in a document.

// How do I reset a hyperlink to its default style in a document?

// Compare a styled hyperlink against one reset to the default appearance in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Visit ONLYOFFICE for developers");
paragraph.SetColor(Api.HexColor('#FF6F3D'));
let copyParagraph = paragraph.Copy();
doc.Push(copyParagraph);
let hyperlink = paragraph.AddHyperlink("https://api.onlyoffice.com");
let copyHyperlink = copyParagraph.AddHyperlink("https://api.onlyoffice.com");
copyHyperlink.SetDefaultStyle();