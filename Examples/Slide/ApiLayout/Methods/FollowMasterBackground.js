// This example sets the master background as the background of the layout.

// How to apply master background to the layout.

// Change background of the presentation layout to the background of a master.

var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oMaster.SetBackground(oFill);
var oLayout = oMaster.GetLayout(0);
oLayout.FollowMasterBackground();
oSlide.FollowLayoutBackground();