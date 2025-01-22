let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let section = document.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);