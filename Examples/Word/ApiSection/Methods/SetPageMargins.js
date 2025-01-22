// This example specifies the page margins for all the pages in this section.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with margins set. ");
paragraph.AddText("The left margin is 5 inches wide (7200 twentieths of a point). ");
paragraph.AddText("The top margin is 2 inches high (2880 twentieths of a point). ");
paragraph.AddText("The right margin is 1 inch wide (1440 twentieths of a point). ");
paragraph.AddText("The bottom margin is 4 inches high (5760 twentieths of a point). ");
let section = doc.GetFinalSection();
section.SetPageMargins(7200, 2880, 1440, 5760);