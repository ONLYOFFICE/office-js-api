# RemoveHeader

Removes the header of the specified type from the current section. After removal, the header will be inherited from the previous section, or if this is the first section in the document, no header of the specified type will be presented.

## Syntax

expression.RemoveHeader(sType);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../../Enumerations/HdrFtrType.md) | Header type to be removed. |

## Returns

This method doesn't return any data.

## Example

This example removes the header of the specified type from the section.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This page first was with a header. ");
oParagraph.AddText("The header has been removed, you cannot see it. ");
oParagraph.AddText("Scroll down to the next page to see the header there.");
var oSection = oDocument.CreateSection(oParagraph);
var oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is page header #1. ");
oParagraph.AddText("You will not see it, as it will be removed.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a page with a header. ");
oDocument.Push(oParagraph);
var oSection1 = oDocument.GetFinalSection();
oHeader = oSection1.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is page header #2. ");
oParagraph.AddText("Only this header can be seen, as the first one has been removed.");
oSection.RemoveHeader("default");
builder.SaveFile("docx", "RemoveHeader.docx");
builder.CloseFile();
```