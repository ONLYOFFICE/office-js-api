// This example shows how to get all caption paragraphs of the specified type from the current document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
let drawing = Api.CreateImage("https://api.onlyoffice.com/content/img/docbuilder/examples/coordinate_aspects.png", 60 * 36000, 35 * 36000);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
document.Push(paragraph);
paragraph.AddCaption("", "Figure", false, "Arabic", false, undefined, "hyphen");
let captionParagraphs = document.GetAllCaptionParagraphs("Figure");
captionParagraphs[0].SetCaps(true);