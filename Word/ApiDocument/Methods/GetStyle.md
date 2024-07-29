# GetStyle

Returns a style by its name.

## Syntax

expression.GetStyle(sStyleName);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStyleName | Required | string |  | The style name. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

This example shows how to get a style by its name.

```javascript
var oDocument = Api.GetDocument();
var oNoSpacingStyle = oDocument.GetStyle("Heading 6");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oNoSpacingStyle);
oParagraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
```
