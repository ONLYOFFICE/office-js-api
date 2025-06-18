// This example demonstrates how to add string custom properties to a document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();

customProps.Add("CompanyName", "ONLYOFFICE");
const companyName = customProps.Get("CompanyName");

customProps.Add("TrueBool", true);
const trueBool = customProps.Get("TrueBool");

customProps.Add("NumberInt", 3.0);
customProps.Add("NumberReal", 3.14);
const numberInt = customProps.Get("NumberInt");
const numberReal = customProps.Get("NumberReal");

customProps.Add("BirthDate", new Date("20 January 2000"));
const birthDate = new Date(customProps.Get("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const paragraph = doc.GetElement(0);
paragraph.AddText("CompanyName: " + companyName);
paragraph.AddLineBreak();

paragraph.AddText("\nTrueBool: " + trueBool);
paragraph.AddLineBreak();

paragraph.AddText("\nNumberInt: " + numberInt);
paragraph.AddText("\nNumberReal: " + numberReal);
paragraph.AddLineBreak();

paragraph.AddText("\nBirthDate: " + birthDate.toDateString());
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
