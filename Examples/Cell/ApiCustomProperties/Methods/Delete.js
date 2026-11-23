// Delete a custom property by its name from a spreadsheet.

// The other custom properties stay unchanged, and false is returned when no property has the given name.

// Add two custom properties, delete one of them and write the results into the sheet cells.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();
customProps.Add("Client", "ONLYOFFICE");
customProps.Add("Status", "Draft");

const isStatusDeleted = customProps.Delete("Status");
const isReviewerDeleted = customProps.Delete("Reviewer");

worksheet.GetRange("A1").SetValue("Status deleted: " + isStatusDeleted);
worksheet.GetRange("A2").SetValue("Reviewer deleted: " + isReviewerDeleted);
worksheet.GetRange("A3").SetValue("Status: " + customProps.Get("Status"));
worksheet.GetRange("A4").SetValue("Client: " + customProps.Get("Client"));