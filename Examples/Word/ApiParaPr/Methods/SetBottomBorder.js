// Add a bottom border to a paragraph via its style in a document.

// How do I place a line below a paragraph using paragraph border settings in a document?

// Visually separate a styled paragraph from content below it by drawing a bottom edge.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBottomBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border below it.");