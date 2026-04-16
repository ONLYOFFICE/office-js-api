// Get a style by its name in a document.

// How to get the style of the heading in a document.

// Display the style name of the "Heading 6" in a document.

let doc = Api.GetDocument();
let noSpacingStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(noSpacingStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");