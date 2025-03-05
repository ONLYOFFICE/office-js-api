# GetDefaultParaPr

Returns a set of default paragraph properties in the current document.

## Syntax

```javascript
expression.GetDefaultParaPr();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

This example shows how to get a set of default paragraph properties in the current document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
let normalStyle = doc.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
paragraph.AddText("This is just a text.");
```
