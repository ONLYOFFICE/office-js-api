# SetShd

Specifies the shading applied to the contents of the paragraph.

## Syntax

```javascript
expression.SetShd(sType, r, g, b, isAuto);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ShdType](../../Enumeration/ShdType.md) |  | The shading type which will be applied to the contents of the current paragraph. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |
| isAuto | Optional | boolean | false | The true value disables paragraph contents shading. |

## Returns

This method doesn't return any data.

## Example

This example specifies the shading applied to the contents of the paragraph.

```javascript
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetShd("clear", 255, 111, 61, false);
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a shading to a paragraph.");
paragraph.SetStyle(myStyle);
```
