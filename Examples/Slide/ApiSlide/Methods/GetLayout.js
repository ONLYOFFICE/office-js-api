// This example shows how to get a layout of the current slide.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oLayout = oSlide.GetLayout();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oLayout.SetBackground(oFill);
oSlide.FollowLayoutBackground();
builder.SaveFile("pptx", "GetLayout.pptx");
builder.CloseFile();