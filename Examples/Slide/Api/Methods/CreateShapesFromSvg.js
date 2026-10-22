// Create a drawing from the SVG markup in a presentation.

// Paths, basic shapes and texts become shapes, SVG groups become groups, and the id attributes become the drawing names.

// Draw a smiling sun from SVG, add it to the slide and show the name of the drawing.

let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
	'<g id="sun">' +
	'<circle id="rays" cx="100" cy="100" r="95" fill="#ffe082"/>' +
	'<circle id="face" cx="100" cy="100" r="65" fill="#ffc107" stroke="#ff8f00" stroke-width="6"/>' +
	'<circle id="leftEye" cx="78" cy="88" r="8" fill="#5d4037"/>' +
	'<circle id="rightEye" cx="122" cy="88" r="8" fill="#5d4037"/>' +
	'<path id="smile" d="M 70 118 Q 100 148 130 118" fill="none" stroke="#5d4037" stroke-width="8"/>' +
	'</g>' +
	'</svg>';
let sun = Api.CreateShapesFromSvg(svg, 2743200, 2743200);
sun.SetPosition(3200400, 1371600);
slide.AddObject(sun);
let fill = Api.CreateSolidFill(Api.RGB(255, 255, 255));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let caption = Api.CreateShape("rect", 2743200, 457200, fill, stroke);
caption.SetPosition(3200400, 4343400);
caption.GetDocContent().GetElement(0).AddText("Drawing name: " + sun.GetName());
slide.AddObject(caption);