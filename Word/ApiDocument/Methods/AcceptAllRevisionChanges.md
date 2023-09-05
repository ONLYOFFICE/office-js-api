# AcceptAllRevisionChanges

Accepts all changes made in review mode.

## Syntax

expression.AcceptAllRevisionChanges();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example accepts all changes made in review mode.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph1 = oDocument.GetElement(0);
oDocument.SetTrackRevisions(true);
oParagraph1.AddText("Reviewing documents");
oParagraph1.SetJc("center");
oParagraph1.SetFontSize(24);
oParagraph1.SetBold(true);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("If you need to get review report, you can use Document Builder. The steps below will show how to do it.");
oDocument.Push(oParagraph2);
oDocument.AcceptAllRevisionChanges();
oDocument.SetTrackRevisions(false);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("All revision changes in this document were accepted.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "AcceptAllRevisionChanges.docx");
builder.CloseFile();
```