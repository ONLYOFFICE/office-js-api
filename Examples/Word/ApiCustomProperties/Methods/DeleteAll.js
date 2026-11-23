// Delete all custom properties from a document.

// The core document properties, such as the title, are not affected.

// Add three custom properties and a title, delete all custom properties and write the values before and after into the document.

const doc = Api.GetDocument();
const core = doc.GetCore();
const customProps = doc.GetCustomProperties();
core.SetTitle("Quarterly report");
customProps.Add("Client", "ONLYOFFICE");
customProps.Add("Pages", 12);
customProps.Add("Approved", true);

const paragraph = doc.GetElement(0);
paragraph.AddText("Before: " + customProps.Get("Client") + ", " + customProps.Get("Pages") + ", " + customProps.Get("Approved"));
customProps.DeleteAll();
paragraph.AddText("\nAfter: " + customProps.Get("Client") + ", " + customProps.Get("Pages") + ", " + customProps.Get("Approved"));
paragraph.AddText("\nTitle: " + core.GetTitle());