# SetNotEqualColumns

Specifies that all the columns in the current section have the different widths. Number of columns is equal to the length of the aWidth array. The length of the aSpaces array MUST BE equal to (aWidth.length - 1).

## Syntax

expression.SetNotEqualColumns(aWidths, aSpaces);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| aWidths | Required | Array<[twips](../../../Enumerations/twips.md) > | An array of column width values measured in twentieths of a point (1/1440 of an inch). |
| aSpaces | Required | Array<[twips](../../../Enumerations/twips.md) > | An array of distance values between the columns measured in twentieths of a point (1/1440 of an inch). |

## Returns

This method doesn't return any data.

## Example

This example specifies that all the columns in the current section have the different widths.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
oSection.SetNotEqualColumns([1440, 2880, 4320], [720, 480]);
oParagraph.AddText("This is a text split into 3 non-equal columns. ");
oParagraph.AddText("The first column is 1 inch wide (1440 twentieths of a point).");
oParagraph.AddColumnBreak();
oParagraph.AddText("This text starts from column #2. ");
oParagraph.AddText("This column is 2 inches wide (2880 twentieths of a point). ");
oParagraph.AddText("The distance between this column and column #1 is half an inch (720 twentieths of a point).");
oParagraph.AddColumnBreak();
oParagraph.AddText("This text starts from column #3. ");
oParagraph.AddText("This column is 3 inches wide (4320 twentieths of a point). ");
oParagraph.AddText("The distance between this column and column #2 is 1/3 of an inch (480 twentieths of a point).");
builder.SaveFile("docx", "SetNotEqualColumns.docx");
builder.CloseFile();
```