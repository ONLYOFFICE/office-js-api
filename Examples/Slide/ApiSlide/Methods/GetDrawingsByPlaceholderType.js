// This example gets drawings by placeholder type and removes it from slide
let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
let oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let oStroke = Api.CreateStroke(0, Api.CreateNoFill());
let oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
let oPlaceholder = Api.CreatePlaceholder("chart");
oShape.SetPlaceholder(oPlaceholder);
oSlide.AddObject(oShape);
let aDrawingsWithPh = oSlide.GetDrawingsByPlaceholderType("chart");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
    aDrawingsWithPh[i].Delete();
}