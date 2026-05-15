// Divide a section into multiple columns of the same width in a document.

// How do I arrange text into evenly sized side-by-side columns in a document?

// Lay out a section so all columns share an equal width throughout a document.

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