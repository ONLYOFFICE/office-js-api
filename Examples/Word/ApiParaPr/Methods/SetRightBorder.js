// This example specifies the border which will be displayed at the right side of the page around the specified paragraph.
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetRightBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its right side.");