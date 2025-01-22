# GetFontList

Returns the fonts list.

## Syntax

expression.GetFontList();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FontInfo[]](../../Enumeration/FontInfo.md)

## Examples

**Example 1:**

```javascript
window.Asc.plugin.executeMethod ("GetFontList", null, function (res) {
    console.log (res)
});
```
