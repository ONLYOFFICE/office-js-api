# GetSelectionType

Returns the type of the current selection.

## Syntax

expression.GetSelectionType();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SelectionType](../../Enumeration/SelectionType.md)

## Example

```javascript
window.Asc.plugin.executeMethod ("GetSelectionType", [], function(sType) &#123;
    switch (sType) &#123;
        case "none":
        case "drawing":
            window.Asc.plugin.executeMethod ("PasteText", [$("#txt_shower")[0].innerText], function (result) &#123;
                paste_done = true;
            &#125;);
            break;
        case "text":
            window.Asc.plugin.callCommand (function() &#123;
                Api.ReplaceTextSmart (Asc.scope.arr);
            &#125;, undefined, undefined, function(result) &#123;
                paste_done = true;
            &#125;);
            break;
    &#125;
&#125;);
