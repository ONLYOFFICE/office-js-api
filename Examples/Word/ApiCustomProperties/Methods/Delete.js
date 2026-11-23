// Delete a custom property by its name from a document.

// The other custom properties stay unchanged, and false is returned when no property has the given name.

// Add two custom properties, delete one of them and write the results into the document.

const doc = Api.GetDocument();
const customProps = doc.GetCustomProperties();
customProps.Add("Client", "ONLYOFFICE");
customProps.Add("Status", "Draft");

const isStatusDeleted = customProps.Delete("Status");
const isReviewerDeleted = customProps.Delete("Reviewer");

const paragraph = doc.GetElement(0);
paragraph.AddText("Status deleted: " + isStatusDeleted);
paragraph.AddText("\nReviewer deleted: " + isReviewerDeleted);
paragraph.AddText("\nStatus: " + customProps.Get("Status"));
paragraph.AddText("\nClient: " + customProps.Get("Client"));