// This example scales the width of the figure using the specified coefficient.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
for (let i = 1; i < 4; i++ ){
	let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
	let stroke = Api.CreateStroke(0, Api.CreateNoFill());
	let drawing = Api.CreateShape("cube", 963295, 963295, fill, stroke);
	paragraph.AddDrawing(drawing);
	drawing.ScaleWidth( i );
}