// Assign an outline level to each paragraph inside a shape in a spreadsheet.

// How do I mark paragraphs at different heading depths in a spreadsheet?

// Structure text by giving each paragraph a numbered depth in the outline hierarchy in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const content = shape.GetContent();
const firstParagraph = content.GetElement(0);
firstParagraph.SetOutlineLvl(1);
firstParagraph.AddText('Outline level of this paragraph is ' + firstParagraph.GetOutlineLvl() + '.');

for (let level = 1; level <= 9; level++) {
	const paragraph = Api.CreateParagraph();
	paragraph.SetOutlineLvl(level);
	paragraph.AddText('This is a paragraph with outline level ' + paragraph.GetOutlineLvl() + '.');
	content.Push(paragraph);
}