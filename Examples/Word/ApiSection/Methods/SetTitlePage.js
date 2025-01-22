// This example specifies whether the current section in this document has the different header and footer for the section first page.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This page does not have a footer, as it is a title page. ");
paragraph.AddText("Scroll down the page to see if the footer was removed.");
let section = document.CreateSection(paragraph);
section.SetTitlePage(true);
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer. ");
paragraph.AddText("You will only see it for page #2.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is page #2 and it has a footer. ");
paragraph.AddText("Scroll down the page to see it.");
document.Push(paragraph);