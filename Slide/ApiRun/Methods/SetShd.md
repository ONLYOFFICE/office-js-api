# SetShd

Specifies the shading applied to the contents of the current text run.

## Syntax

expression.SetShd(sType, r, g, b);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

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
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetShd("clear", 255, 111, 61);
oRun.AddText("This is a text run with the text shading set to orange.");
oParagraph.AddElement(oRun);
```
