# SetSmallCaps

Specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

## Syntax

expression.SetSmallCaps(isSmallCaps);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | Required | Boolean | Specifies if the contents of the current Range are displayed capitalized two points smaller or not. |

## Returns

[ApiRange](../ApiRange.md) &#124; null (returns null if can't apply small caps)

## Example

This example specifies that all the lowercase letter characters in the current text Range are formatted for display only as their capital letter character equivalents which are two points smaller than the actual font size specified for this text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(10, 24);
oRange.SetSmallCaps(true);
builder.SaveFile("docx", "SetSmallCaps.docx");
builder.CloseFile();
```