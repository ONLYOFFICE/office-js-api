# RemoveFooter

Removes the footer of the specified type from the current section. After removal, the footer will be inherited from the previous section, or if this is the first section in the document, no footer of the specified type will be presented.

## Syntax

expression.RemoveFooter(sType);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../../Enumerations/HdrFtrType.md) | Footer type to be removed. |

## Returns

This method doesn't return any data.

## Example

This example removes the footer of the specified type from the section.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This page first was with a footer. ");
oParagraph.AddText("Scroll down the page to see if it was removed.");
var oSection = oDocument.CreateSection(oParagraph);
var oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is page footer #1. ");
oParagraph.AddText("You will not see it, as it will be removed.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a page with a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
oDocument.Push(oParagraph);
var oSection1 = oDocument.GetFinalSection();
oFooter = oSection1.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is page footer #2. ");
oParagraph.AddText("Only this footer can be seen, as the first one has been removed.");
oSection.RemoveFooter("default");
builder.SaveFile("docx", "RemoveFooter.docx");
builder.CloseFile();
```