// Turn a fragment of text into a hyperlink in a shape on a worksheet.

// The range must stay within a single paragraph, and either a link or a bookmark name is required, not both.

// Turn the word "here" into a link to the ONLYOFFICE website.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Click here to learn more");

let range = shape.GetTextRange();

let link = range.GetRange(6, 10);
link.AddHyperlink("https://www.onlyoffice.com", "ONLYOFFICE");