// Delete a custom property by its name from a presentation.

// The other custom properties stay unchanged, and false is returned when no property has the given name.

// Add two custom properties, delete one of them and write the results into a shape on the slide.

const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();
customProps.Add("Client", "ONLYOFFICE");
customProps.Add("Status", "Draft");

const isStatusDeleted = customProps.Delete("Status");
const isReviewerDeleted = customProps.Delete("Reviewer");

const fill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Status deleted: " + isStatusDeleted);
paragraph.AddText("\nReviewer deleted: " + isReviewerDeleted);
paragraph.AddText("\nStatus: " + customProps.Get("Status"));
paragraph.AddText("\nClient: " + customProps.Get("Client"));