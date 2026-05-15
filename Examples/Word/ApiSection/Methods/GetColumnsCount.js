// Count the number of columns defined in a section in a document.

// How do I find out how many columns a section has in a document?

// Retrieve the total column count from a multi-column layout in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetNotEqualColumns([1440, 2880, 4320], [720, 480]);
let columnsCount = section.GetColumnsCount();
paragraph.AddText("This is a text split into " + columnsCount + " non-equal columns. ");
paragraph.AddText("The first column is 1 inch wide (1440 twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This column is 2 inches wide (2880 twentieths of a point). ");
paragraph.AddText("The distance between this column and column #1 is half an inch (720 twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This column is 3 inches wide (4320 twentieths of a point). ");
paragraph.AddText("The distance between this column and column #2 is 1/3 of an inch (480 twentieths of a point).");