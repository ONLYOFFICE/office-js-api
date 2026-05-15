// Fill the interior of text characters with a solid color in a document.

// How do I change the color that fills the inside of letters in a document?

// Paint text with a custom fill so characters display a chosen color in a document.

let doc = Api.GetDocument();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
textPr.SetCaps(true);
textPr.SetFontFamily("Comic Sans MS");
let textArt = Api.CreateWordArt(textPr, "onlyoffice", "textWave1", null, null, 0, 1550 * 36000, 50 * 36000);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(textArt);

paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("is the best office suite");
run.SetOutLine(Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51))));
run.SetTextFill(Api.CreateSolidFill(Api.RGB(255, 111, 61)));
paragraph.Push(run);
paragraph.SetJc("center");
textArt.GetContent().Push(paragraph);