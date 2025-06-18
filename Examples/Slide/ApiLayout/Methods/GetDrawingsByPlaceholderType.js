// This example gets drawings by placeholder type and removes it from layout.

// How to get all drawings as an array by indicating placeholder type.

// Get drawings by their placeholder type.

let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oMaster = oPresentation.GetMaster(0);
let oLayout = oMaster.GetLayout(0);
let aDrawingsWithPh = oLayout.GetDrawingsByPlaceholderType("ctrTitle");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
    aDrawingsWithPh[i].Delete();
}
