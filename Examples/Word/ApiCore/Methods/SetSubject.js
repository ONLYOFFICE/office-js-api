// This example demonstrates how to set the subject of the current document.

const document = Api.GetDocument();
const core = document.GetCore();
core.SetSubject("ApiCore Method Showcase");

const subject = core.GetSubject();
let paragraph = document.GetElement(0);
paragraph.AddText("Subject: " + subject);
