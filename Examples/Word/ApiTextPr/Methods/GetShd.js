// This example shows how to find out the shading type of the text.

// Get the shading of the text and display it in the document.

// How to know the text shading type.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);

const myNewRunStyle = doc.CreateStyle('My New Run Style', 'run');
const styleTextPr = myNewRunStyle.GetTextPr();
styleTextPr.SetCaps(true);
styleTextPr.SetFontFamily('Calibri Light');

const firstRun = Api.CreateRun();
firstRun.AddText('This is just a sample text. ');
firstRun.AddText('The text properties are changed and the style is added to the paragraph. ');
firstParagraph.AddElement(firstRun);

const secondRun = Api.CreateRun();
secondRun.SetStyle(myNewRunStyle);
secondRun.AddText('This is a text run with its own style.');

const secondRunTextPr = secondRun.GetTextPr();
secondRunTextPr.SetShd('clear', Api.RGBA(255, 111, 61));
firstParagraph.AddElement(secondRun);

const secondParagraph = Api.CreateParagraph();
const color = secondRunTextPr.GetShd();
const type = color.GetClassType();
secondParagraph.AddText('Shading type: ' + type);
doc.Push(secondParagraph);
