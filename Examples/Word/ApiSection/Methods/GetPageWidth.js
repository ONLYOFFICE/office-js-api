let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
let width = section.GetPageWidth();
paragraph.AddText("Page width = " + width);