# AddText

Adds a text to the specified position.

## Syntax

expression.AddText(sText, sPosition?);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Optional | String | The text that we want to insert into the current document element. Default value is "". |
| sPosition | Optional | String | The position where the text will be added ("before" or "after" the range specified). Default value is "after". |

## Returns

Boolean (returns false if range is empty or sText isn't string value)

## Example

This example adds a text to the specified position.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Document");
var oRange = oDocument.GetRange(0, 7);
oRange.AddText("ONLYOFFICE ", "before");
oRange.AddText(" Builder", "after");
builder.SaveFile("docx", "AddText.docx");
builder.CloseFile();
```