// This example demonstrates how get ApiCore instance and use its methods to manage document metadata.

const document = Api.GetDocument();
const core = document.GetCore();

core.SetCategory("Examples");
core.SetContentStatus("Final");
core.SetCreated(new Date('2000-01-20'));
core.SetCreator("John Smith");
core.SetDescription("Sample document made to help fellow users understand ApiCore methods.");
core.SetIdentifier("#ID42");
core.SetKeywords("Example; ApiCore; Document");
core.SetLanguage("en-US");
core.SetLastModifiedBy("Mark Pottato");
core.SetLastPrinted(new Date());
core.SetModified(new Date('1990-03-10'));
core.SetRevision("Rev. A");
core.SetSubject("ApiCore Method Showcase");
core.SetTitle("My Document Title");
core.SetVersion("v9.0");

const category = core.GetCategory();
const contentStatus = core.GetContentStatus();
const createdDate = core.GetCreated().toDateString();
const creator = core.GetCreator();
const description = core.GetDescription();
const identifier = core.GetIdentifier();
const keywords = core.GetKeywords();
const language = core.GetLanguage();
const lastModifiedBy = core.GetLastModifiedBy();
const lastPrintedDate = core.GetLastPrinted().toDateString();
const lastModifiedDate = core.GetModified().toDateString();
const revision = core.GetRevision();
const subject = core.GetSubject();
const title = core.GetTitle();
const version = core.GetVersion();

let paragraph = document.GetElement(0);
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
