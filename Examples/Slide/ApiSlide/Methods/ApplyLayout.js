// This example applies the specified layout to the slide. The layout must be in slide master.

// How to apply a layout to the slide.

// Get a layout from the presentation master using its index and apply it to the slide.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oLayout = oMaster.GetLayout(4);
oSlide.ApplyLayout(oLayout);