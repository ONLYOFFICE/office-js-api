# GetStyle

Returns a style by its name.

## Syntax

expression.GetStyle(sStyleName);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sStyleName | Required | String | The style name. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example shows how to get a style by its name.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNoSpacingStyle = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNoSpacingStyle);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
builder.SaveFile("docx", "GetStyle.docx");
builder.CloseFile();
```