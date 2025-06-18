// This example specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents.

// Make capitalized the paragraph text.

// Create a paragraph with the font set to capitalized letters.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to capitalized letters.");
paragraph.SetCaps(true);