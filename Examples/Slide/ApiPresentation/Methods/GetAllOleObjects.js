// This example shows how to get all the OLE objects from the current presentation

const oPresentation = Api.GetPresentation();
const aOleObjects = oPresentation.GetAllOleObjects();