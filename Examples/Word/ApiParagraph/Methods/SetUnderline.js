// This example specifies that the contents of this paragraph are displayed along with a line appearing directly below the character.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text underlined with a single line.");
paragraph.SetUnderline(true);