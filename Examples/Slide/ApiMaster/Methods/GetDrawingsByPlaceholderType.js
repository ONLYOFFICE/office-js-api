// This example gets drawings by placeholder type and removes it from slide master
let oPresentation = Api.GetPresentation();
let oSlide = oPresentation.GetSlideByIndex(0);
let oMaster = oPresentation.GetMaster(0);
let aDrawingsWithPh = oMaster.GetDrawingsByPlaceholderType("title");
for (let i = 0; i < aDrawingsWithPh.length; i++) {
    aDrawingsWithPh[i].Delete();
}
