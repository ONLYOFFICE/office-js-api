// This example specifies the border which will be displayed at the right side of the page around the specified paragraph.

// How to add border to the right side of the paragraph.

// Add right single border.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph. We will add a two point orange border at its right side. ");
paragraph.AddText("The space between the right side of the paragraph and the border is 8 points. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetRightBorder("single", 16, 8, 255, 111, 61);