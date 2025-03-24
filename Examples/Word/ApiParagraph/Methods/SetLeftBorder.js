// This example specifies the border which will be displayed at the left side of the page around the specified paragraph.

// How to add border to the left side of the paragraph.

// Add left single border.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a two point orange border at its left side. ");
paragraph.AddText("The space between the left side of the paragraph and the border is 8 points. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetLeftBorder("single", 16, 8, 255, 111, 61);