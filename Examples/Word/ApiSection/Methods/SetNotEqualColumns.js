// This example specifies that all the columns in the current section have the different widths.

// How to split the text into 3 columns with different sizes.

// Get the final section and divide it to columns.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetNotEqualColumns([1440, 2880, 4320], [720, 480]);
paragraph.AddText("This is a text split into 3 non-equal columns. ");
paragraph.AddText("The first column is 1 inch wide (1440 twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This column is 2 inches wide (2880 twentieths of a point). ");
paragraph.AddText("The distance between this column and column #1 is half an inch (720 twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This column is 3 inches wide (4320 twentieths of a point). ");
paragraph.AddText("The distance between this column and column #2 is 1/3 of an inch (480 twentieths of a point).");