// This example demonstrates how to add string custom properties to a document.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();

customProps.Add("CompanyName", "ONLYOFFICE");
const companyName = customProps.GetPropertyValueByName("CompanyName");

customProps.Add("trueBool", true);
const trueBool = customProps.GetPropertyValueByName("trueBool");

customProps.Add("NumberInt", 3.0);
customProps.Add("NumberReal", 3.14);
const numberInt = customProps.GetPropertyValueByName("NumberInt");
const numberReal = customProps.GetPropertyValueByName("NumberReal");

customProps.Add("BirthDate", new Date("20 January 2000"));
const birthDate = new Date(customProps.GetPropertyValueByName("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Company Name: " + companyName + " (" + typeof companyName + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nTrue Boolean: " + trueBool + " (" + typeof trueBool + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nNumber Int: " + numberInt + " (" + typeof numberInt + ")");
paragraph.AddText("\nNumber Real: " + numberReal + " (" + typeof numberReal + ")");
paragraph.AddLineBreak();

paragraph.AddText("\nBirth Date: " + birthDate.toDateString() + " (" + typeof birthDate + ")");
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
