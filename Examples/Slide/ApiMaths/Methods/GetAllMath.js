// Return all the equations from the presentation.

// The equations are returned as an array in presentation order.

// Add two equations to a presentation, then get all the equations from the presentation and report their texts.

let presentation = Api.GetPresentation();
let slide = presentation.GetCurrentSlide();
let shape = Api.CreateShape("rect", 3000000, 1000000, null, null);
shape.SetPosition(0, 0);
slide.AddObject(shape);
let paragraph = shape.GetDocContent().GetElement(0);
paragraph.Select();
presentation.GetMaths().Add("a+b");

paragraph = Api.CreateParagraph();
shape.GetDocContent().Push(paragraph);
paragraph.Select();
presentation.GetMaths().Add("c+d");

let allMath = presentation.GetMaths().GetAllMath();
let texts = allMath.map(function(math){
	return math.GetText();
});

let report = Api.CreateParagraph();
report.AddText("All equations: " + texts.join(", "));
shape.GetDocContent().Push(report);
