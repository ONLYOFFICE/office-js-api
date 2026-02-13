// This example adds an entrance fade animation to a shape.
let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oSlide.AddObject(oShape);
let oTimeLine = oSlide.GetTimeLine();
let oMainSequence = oTimeLine.GetMainSequence();
oMainSequence.AddEffect(oShape, 'entranceFade', 'onclick');
