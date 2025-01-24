// This example shows how to get the current locale ID.
let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
let locale = Api.GetLocale();
worksheet.GetRange("A1").SetValue("Locale: " + locale);