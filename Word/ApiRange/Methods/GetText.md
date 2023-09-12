# GetText

Returns a text from the specified range.

## Syntax

expression.GetText(oPr);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oPr | Required | [RangeGetTextPr](../../../Enumerations/RangeGetTextPr.md) | The resulting string display properties. |

## Returns

String (returns "" if range is empty)

## Example

This example shows how to get a text from the specified range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("\tONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 24);
var sText = oRange.GetText({"Numbering": true, "Math": true, "NewLineSeparator": "\r", "TabSymbol": "\t", "NewLineParagraph": true, "TableCellSeparator": "\t", "TableRowSeparator": "\r\n", "ParaSeparator": "\r\n"});
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the specified range: " + sText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();
```