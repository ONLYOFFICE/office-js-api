let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let section = document.GetFinalSection();
let height = section.GetPageHeight();
paragraph.AddText("Page height = " + height);