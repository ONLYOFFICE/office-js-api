// This example sets the parameters of the watermark settings and apply them to the document.
let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("data:image/png;base64,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");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark height = " + doc.GetWatermarkSettings().GetImageHeight());
doc.Push(paragraph);