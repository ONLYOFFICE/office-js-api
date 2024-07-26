// This example creates a copy of the current slide object.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
var oCopySlide = oSlide.Copy();
oPresentation.AddSlide(oCopySlide);
builder.SaveFile("pptx", "Copy.pptx");
builder.CloseFile();