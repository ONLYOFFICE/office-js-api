# CreateRange

Creates an element range. If you do not specify the start and end positions, the range will be taken from the entire element.

## Syntax

expression.CreateRange();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ApiRange](../../ApiRange/ApiRange.md) | The element from which the range will be taken. |
| nStart | Required | Number | Start range position. |
| nEnd | Required | Number | End range position. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) &#124; null (returns null if oElement isn't supported).

## Example

This example ctreates a range and sets bold for the first 9 characters.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);
builder.SaveFile("docx", "CreateRange.docx");
builder.CloseFile();
```