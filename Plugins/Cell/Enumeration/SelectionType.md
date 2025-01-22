# SelectionType

The current selection type ("none", "text", "drawing", or "slide").

## Type

Enumeration

## Values

- "none"
- "text"
- "drawing"
- "slide"


## Example

```javascript
window.Asc.plugin.executeMethod ("GetSelectionType", [], function(sType) &#123;
    switch (sType) &#123;
        case "none":
        case "drawing":
            window.Asc.plugin.executeMethod ("PasteText", [$("#txt_shower")[0].innerText]);
            break;
        case "text":
            window.Asc.plugin.callCommand (function() &#123;
                Api.ReplaceTextSmart (Asc.scope.arr);
            &#125;);
            break;
    &#125;
&#125;);
