// This example sets the bold property to the text character.
let document = editor.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to bold.");
paragraph.SetBold(true);