// This example specifies the shading applied to the contents of the paragraph.

// How to add shading to the paragraph.

// Apply the clear shading to the paragraph.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetShd("clear", 255, 111, 61, false);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a shading to a paragraph.");
paragraph.SetStyle(myStyle);