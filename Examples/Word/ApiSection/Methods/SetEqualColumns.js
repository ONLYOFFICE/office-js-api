// This example specifies that all the text columns in the current section are of equal width.

// How to split the text into 3 equal columns.

// Get the final section and set its columns.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetEqualColumns(3, 720);
paragraph.AddText("This is a text split into 3 equal columns. ");
paragraph.AddText("The columns are separated by the distance of half an inch.");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");