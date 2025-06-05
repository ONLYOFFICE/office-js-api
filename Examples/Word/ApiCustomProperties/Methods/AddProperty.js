// This example demonstrates how to add string custom properties to a document.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.AddProperty("CompanyName", "ONLYOFFICE");
const companyName = customProps.GetPropertyValueByName("CompanyName");

customProps.AddProperty("TrueBool", true);
const trueBool = customProps.GetPropertyValueByName("TrueBool");

customProps.AddProperty("NumberInt", 3.0);
customProps.AddProperty("NumberReal", 3.14);
const numberInt = customProps.GetPropertyValueByName("NumberInt");
const numberReal = customProps.GetPropertyValueByName("NumberReal");

customProps.AddProperty("BirthDate", new Date("20 January 2000"));
const birthDate = new Date(customProps.GetPropertyValueByName("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const paragraph = document.GetElement(0);
paragraph.AddText("CompanyName: " + companyName);
paragraph.AddLineBreak();

paragraph.AddText("\nTrueBool: " + trueBool);
paragraph.AddLineBreak();

paragraph.AddText("\nNumberInt: " + numberInt);
paragraph.AddText("\nNumberReal: " + numberReal);
paragraph.AddLineBreak();

paragraph.AddText("\nBirthDate: " + birthDate.toDateString());
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
