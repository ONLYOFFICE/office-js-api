// This example wraps the paragraph content in a mail merge field.
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
oParagraph.WrapInMailMergeField();