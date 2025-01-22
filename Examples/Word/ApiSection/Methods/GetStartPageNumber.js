// This example gets a start page index of section
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let section = paragraph.GetSection();
section.SetStartPageNumber(5);
let startPageNumber = section.GetStartPageNumber();
paragraph.AddText("The start page number for this section is: " + startPageNumber);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("Page #");
paragraph.AddPageNumber();