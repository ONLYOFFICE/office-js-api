// This example shows how to get all layouts of the specified slide master
const oPresentation = Api.GetPresentation();
const aSlideMasters = oPresentation.GetAllSlideMasters();
const oChosenMaster = aSlideMasters[0];
const aLayouts = oChosenMaster.GetAllLayouts();