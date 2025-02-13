# GetParentContentControl

Returns a content control that contains the current content control.

## Syntax

```javascript
expression.GetParentContentControl();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | null

## Example

This example shows how to get a content control that contains the content control.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt1 = Api.CreateInlineLvlSdt();
inlineLvlSdt1.AddText("This is a parent inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt1);
let inlineLvlSdt2 = Api.CreateInlineLvlSdt();
inlineLvlSdt2.AddText("This is an inline text content control added in another content control.");
inlineLvlSdt1.AddElement(inlineLvlSdt2, 0);
let parentInlineLvlSdt = inlineLvlSdt2.GetParentContentControl();
parentInlineLvlSdt.SetAlias("№1");
```
