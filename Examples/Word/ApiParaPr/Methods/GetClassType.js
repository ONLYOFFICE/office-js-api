// This example gets a class type and inserts it into the document.
let document = Api.GetDocument();
let myStyle = document.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
let paragraph = document.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its left side.");
let classType = paraPr.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
document.Push(paragraph);