// This example sets all 4 font slots with the specified font family.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily("Consolas");