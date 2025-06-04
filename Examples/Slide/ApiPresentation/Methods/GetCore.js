// This example demonstrates how get ApiCore instance and use its methods to manage presentation metadata.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const core = presentation.GetCore();
core.SetCategory("Examples");
core.SetContentStatus("Final");
core.SetCreated(new Date('2000-01-20'));
core.SetCreator("Eduard B.");
core.SetDescription("Sample presentation demonstrating ApiCore methods.");
core.SetIdentifier("#ID42");
core.SetKeywords("Presentation; ApiCore; Metadata");
core.SetLanguage("en-US");
core.SetLastModifiedBy("Sergey L.");
core.SetLastPrinted(new Date());
core.SetModified(new Date('1990-03-10'));
core.SetRevision("Rev. B");
core.SetSubject("Presentation Metadata Showcase");
core.SetTitle("My Presentation Title");
core.SetVersion("v9.0");

let category = core.GetCategory();
let contentStatus = core.GetContentStatus();
let createdDate = core.GetCreated().toDateString();
let creator = core.GetCreator();
let description = core.GetDescription();
let identifier = core.GetIdentifier();
let keywords = core.GetKeywords();
let language = core.GetLanguage();
let lastModifiedBy = core.GetLastModifiedBy();
let lastPrintedDate = core.GetLastPrinted().toDateString();
let lastModifiedDate = core.GetModified().toDateString();
let revision = core.GetRevision();
let subject = core.GetSubject();
let title = core.GetTitle();
let version = core.GetVersion();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 250 * 36000, 150 * 36000, fill, stroke);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);

paragraph.AddText("Category: " + category + "\n");
paragraph.AddText("Content Status: " + contentStatus + "\n");
paragraph.AddText("Created: " + createdDate + "\n");
paragraph.AddText("Creator: " + creator + "\n");
paragraph.AddText("Description: " + description + "\n");
paragraph.AddText("Identifier: " + identifier + "\n");
paragraph.AddText("Keywords: " + keywords + "\n");
paragraph.AddText("Language: " + language + "\n");
paragraph.AddText("Last Modified By: " + lastModifiedBy + "\n");
paragraph.AddText("Last Printed: " + lastPrintedDate + "\n");
paragraph.AddText("Last Modified: " + lastModifiedDate + "\n");
paragraph.AddText("Revision: " + revision + "\n");
paragraph.AddText("Subject: " + subject + "\n");
paragraph.AddText("Title: " + title + "\n");
paragraph.AddText("Version: " + version);

slide.AddObject(shape);
