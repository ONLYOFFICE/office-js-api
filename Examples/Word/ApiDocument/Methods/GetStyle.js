// This example shows how to get a style by its name.
let document = Api.GetDocument();
let noSpacingStyle = document.GetStyle("Heading 6");
let paragraph = document.GetElement(0);
paragraph.SetStyle(noSpacingStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");