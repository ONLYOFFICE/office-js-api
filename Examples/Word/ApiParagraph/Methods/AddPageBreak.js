// This example adds a page break and starts the next element from the next page.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
paragraph.AddPageBreak();
paragraph.AddText("This is the text which starts from the beginning of the second page. ");
paragraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");