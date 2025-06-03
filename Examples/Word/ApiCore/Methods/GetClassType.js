// This example gets a class type and pastes it into the document.

const document = Api.GetDocument();
const core = document.GetCore();
const classType = core.GetClassType();

let paragraph = document.GetElement(0);
paragraph.AddText("Class type: " + classType);
