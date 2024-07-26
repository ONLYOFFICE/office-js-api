// This example appends a new slide to the end of the presentation.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oSlide.SetBackground(oFill);
oPresentation.AddSlide(oSlide);
builder.SaveFile("pptx", "AddSlide.pptx");
builder.CloseFile();