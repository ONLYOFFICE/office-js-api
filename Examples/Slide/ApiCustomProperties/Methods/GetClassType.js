// Identify the data type of a custom properties object in a presentation.

// How do I determine the class of a custom properties collection?

// Display the class information for custom properties in a presentation.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();
const classType = customProps.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);