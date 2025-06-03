// This example demonstrates how to add a date custom property to a document.

const document = Api.GetDocument();
const customProps = document.GetCustomProperties();

customProps.AddDateProperty("BirthDate", new Date("20 January 2000"));

const birthDate = new Date(customProps.GetPropertyValueByName("BirthDate"));
const isOfLegalAge = (new Date().getFullYear() - birthDate.getFullYear()) >= 18;

const paragraph = document.GetElement(0);
paragraph.AddText("Birth Date: " + birthDate.toDateString());
paragraph.AddText("\nIs of legal age: " + isOfLegalAge);
