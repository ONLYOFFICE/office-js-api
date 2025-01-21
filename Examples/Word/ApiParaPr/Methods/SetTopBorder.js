// This example specifies the border which will be displayed above a set of paragraphs which have the same set of paragraph border settings.
let document = Api.GetDocument();
let myStyle = document.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetTopBorder("single", 24, 0, 255, 111, 61);
let paragraph = document.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border above it.");