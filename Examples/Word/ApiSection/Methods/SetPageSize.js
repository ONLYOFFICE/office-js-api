// This example specifies the properties (size and orientation) for all the pages in the section.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a page size set. ");
paragraph.AddText("The page width is 5 inches (7200 twentieths of a point). ");
paragraph.AddText("The page height is 3 inches (4320 twentieths of a point). ");
paragraph.AddText("The font size is default (11 points).");
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);