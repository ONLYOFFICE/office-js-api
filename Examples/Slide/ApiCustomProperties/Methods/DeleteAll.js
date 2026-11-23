// Delete all custom properties from a presentation.

// The core presentation properties, such as the title, are not affected.

// Add three custom properties and a title, delete all custom properties and write the values before and after into a shape on the slide.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
const customProps = presentation.GetCustomProperties();
core.SetTitle("Quarterly report");
customProps.Add("Client", "ONLYOFFICE");
customProps.Add("Pages", 12);
customProps.Add("Approved", true);

const fill = Api.CreateSolidFill(Api.RGB(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Before: " + customProps.Get("Client") + ", " + customProps.Get("Pages") + ", " + customProps.Get("Approved"));
customProps.DeleteAll();
paragraph.AddText("\nAfter: " + customProps.Get("Client") + ", " + customProps.Get("Pages") + ", " + customProps.Get("Approved"));
paragraph.AddText("\nTitle: " + core.GetTitle());