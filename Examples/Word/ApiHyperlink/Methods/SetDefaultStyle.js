// This example sets the default hyperlink style.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("Api Document Builder");
paragraph.SetColor(255, 111, 61);
let copyParagraph = paragraph.Copy();
document.Push(copyParagraph);
let hyperlink = paragraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
let copyHyperlink = copyParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
copyHyperlink.SetDefaultStyle();