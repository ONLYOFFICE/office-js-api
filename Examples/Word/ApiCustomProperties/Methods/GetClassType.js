// This example demonstrates how to get the class type of ApiCustomProperties.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

const classType = customProps.GetClassType();
let paragraph = document.GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);
