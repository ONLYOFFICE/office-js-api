// This example specifies the border which will be displayed below a set of paragraphs which have the same paragraph border settings.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a thin orange border below it.");
paragraph.SetBottomBorder("single", 8, 0, 255, 111, 61);