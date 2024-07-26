# SetShd

Specifies the shading applied to the contents of the current text run.

## Syntax

expression.SetShd(sType, r, g, b);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | ShdType |  | The shading type applied to the contents of the current text run. |
| r | Required | byte |  | Red color component value. |
| g | Required | byte |  | Green color component value. |
| b | Required | byte |  | Blue color component value. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the shading applied to the contents of the current text run.

```javascript
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetShd("clear", 255, 111, 61);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("A sample text with the shading set to orange.");
```
