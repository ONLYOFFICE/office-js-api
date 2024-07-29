// This example applies the specified layout to the slide. The layout must be in slide master.
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(4);
oSlide.ApplyLayout(oLayout);