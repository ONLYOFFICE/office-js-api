// This example shows how to restore ApiColor objects of different types from JSON.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const colors = [
	Api.RGB(93, 192, 232),
	Api.RGBA(149, 192, 56, 128),
	Api.HexColor('#FF6F3D'),
	Api.ThemeColor('accent2'),
	Api.AutoColor()
];

for (let i = 0; i < colors.length; i++) {
	const original = colors[i];
	const json = JSON.parse(original.ToJSON());
	const restored = original.FromJSON(json);

	if (i > 0) paragraph.AddLineBreak();
	let run = Api.CreateRun();
	run.SetColor(original);
	run.AddText('Original: ' + original.GetHex());
	paragraph.Push(run);

	run = Api.CreateRun();
	run.AddText(' - ');
	paragraph.Push(run);

	run = Api.CreateRun();
	run.SetColor(restored);
	run.AddText('Restored: ' + restored.GetHex());
	paragraph.Push(run);
}
