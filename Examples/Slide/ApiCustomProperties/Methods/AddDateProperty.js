// This example demonstrates how to add a date custom property to a document.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.AddDateProperty("BirthDate", new Date("20 January 2000"));

const birthDate = new Date(customProps.GetPropertyValueByName("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Birth Date: " + birthDate.toDateString());
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
