// This example shows how to find out the shading type of the text.

// Get the shading of the text and apply it to another run.

// How to know the text shading type.

let doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);

let myNewRunStyle = doc.CreateStyle('My New Run Style', 'run');
let styleTextPr = myNewRunStyle.GetTextPr();
styleTextPr.SetCaps(true);
styleTextPr.SetFontFamily('Calibri Light');

let firstRun = Api.CreateRun();
firstRun.AddText('This is just a sample text. ');
firstParagraph.AddElement(firstRun);

let secondRun = Api.CreateRun();
secondRun.SetStyle(myNewRunStyle);
secondRun.AddText('A text run with shd applied to it.');

let secondRunTextPr = secondRun.GetTextPr();
secondRunTextPr.SetShd('clear', Api.RGBA(255, 111, 61));
firstParagraph.AddElement(secondRun);

let shd = secondRunTextPr.GetShd();

let secondParagraph = Api.CreateParagraph();
let thirdRun = Api.CreateRun();
thirdRun.AddText('This run has the shading from the last run in the first paragraph.');
let thirdRunTextPr = thirdRun.GetTextPr();
thirdRunTextPr.SetShd(shd.Type, shd.Color);
secondParagraph.AddElement(thirdRun);
doc.Push(secondParagraph);
