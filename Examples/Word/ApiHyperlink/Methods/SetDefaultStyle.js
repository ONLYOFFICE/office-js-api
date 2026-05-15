// Apply the default built-in style to a hyperlink in a document.

// How do I reset a hyperlink to its default style in a document?

// Compare a styled hyperlink against one reset to the default appearance in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
paragraph.SetColor(Api.HexColor('#FF6F3D'));
let copyParagraph = paragraph.Copy();
doc.Push(copyParagraph);
let hyperlink = paragraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
let copyHyperlink = copyParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
copyHyperlink.SetDefaultStyle();