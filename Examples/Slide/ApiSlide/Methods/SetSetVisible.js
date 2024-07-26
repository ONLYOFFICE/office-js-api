// This example sets the visibility to the current presentation slide.
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = Api.CreateSlide();
oSlide.SetSetVisible(false);
oPresentation.AddSlide(oSlide);
builder.SaveFile("pptx", "SetSetVisible.pptx");
builder.CloseFile();