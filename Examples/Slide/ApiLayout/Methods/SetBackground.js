// This example sets the background to the current slide layout.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
builder.SaveFile("pptx", "SetBackground.pptx");
builder.CloseFile();