# unShow

Hides an input helper.

## Syntax

```javascript
expression.unShow();
```

`expression` - A variable that represents a [InputHelper](../InputHelper.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

```javascript editor-docx
window.Asc.plugin.executeMethod ("SelectContentControl", [window.Asc.plugin.currentContentControl.InternalId], function() {
    window.Asc.plugin.executeMethod("InputText", [item.text]);
    window.Asc.plugin.getInputHelper().unShow();
});
```
