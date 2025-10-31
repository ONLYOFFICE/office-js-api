// This example shows how to get the shading properties of the current selection.

const doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

const run = Api.CreateRun();
run.AddText('This text has yellow background.');
const textPr = run.GetTextPr();
textPr.SetShd('clear', 255, 255, 0);
paragraph.AddElement(run);

run.Select();

const selection = doc.GetSelection();
const shading = selection.GetShading();

paragraph = Api.CreateParagraph();
if (shading) {
	paragraph.AddText('Shading type: ' + shading.GetClassType());
} else {
	paragraph.AddText('No shading applied.');
}
doc.Push(paragraph);
