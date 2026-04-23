// Assign an outline level to each paragraph inside a shape in a spreadsheet.

// How do I mark paragraphs at different heading depths in a spreadsheet?

// Structure text by giving each paragraph a numbered depth in the outline hierarchy in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const content = shape.GetContent();
const firstParagraph = content.GetElement(0);
firstParagraph.AddText('Outline level of this paragraph is ' + firstParagraph.GetOutlineLvl() + '.');

for (let levelIndex = 0; levelIndex < 9; levelIndex++) {
	const paragraph = Api.CreateParagraph();
	paragraph.SetOutlineLvl(levelIndex);
	const level = paragraph.GetOutlineLvl() + 1;
	paragraph.AddText('This is a paragraph with outline level ' + level + '.');
	content.Push(paragraph);
}