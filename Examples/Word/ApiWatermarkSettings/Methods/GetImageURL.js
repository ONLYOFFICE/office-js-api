// Read the image source of a watermark in a document.

// How do I reuse the image displayed by a watermark in a document?

// Retrieve the watermark image source and insert a copy into the document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
let paragraph = Api.CreateParagraph();
let source = doc.GetWatermarkSettings().GetImageURL();
let image = Api.CreateImage(source, 70 * 36000, 80 * 36000);
paragraph.AddDrawing(image);
doc.Push(paragraph);