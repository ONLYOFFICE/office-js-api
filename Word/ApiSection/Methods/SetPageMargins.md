# SetPageMargins

Specifies the page margins for all the pages in this section.

## Syntax

expression.SetPageMargins(nLeft, nTop, nRight, nBottom);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nLeft | Required | [twips](../../../Enumerations/twips.md)  | The left margin width measured in twentieths of a point (1/1440 of an inch). |
| nTop | Required | [twips](../../../Enumerations/twips.md)  | The top margin height measured in twentieths of a point (1/1440 of an inch). |
| nRight | Required | [twips](../../../Enumerations/twips.md)  | The right margin width measured in twentieths of a point (1/1440 of an inch). |
| nBottom | Required | [twips](../../../Enumerations/twips.md)  | The bottom margin height measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies the page margins for all the pages in this section.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with margins set. ");
oParagraph.AddText("The left margin is 5 inches wide (7200 twentieths of a point). ");
oParagraph.AddText("The top margin is 2 inches high (2880 twentieths of a point). ");
oParagraph.AddText("The right margin is 1 inch wide (1440 twentieths of a point). ");
oParagraph.AddText("The bottom margin is 4 inches high (5760 twentieths of a point). ");
var oSection = oDocument.GetFinalSection();
oSection.SetPageMargins(7200, 2880, 1440, 5760);
builder.SaveFile("docx", "SetPageMargins.docx");
builder.CloseFile();
```