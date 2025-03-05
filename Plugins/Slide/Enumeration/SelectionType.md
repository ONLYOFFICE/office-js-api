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

```javascript editor-pptx
window.Asc.plugin.executeMethod ("GetSelectionType", [], function(type) {
    switch (type) {
        case "none":
        case "drawing":
            window.Asc.plugin.executeMethod ("PasteText", [$("#txt_shower")[0].innerText]);
            break;
        case "text":
            window.Asc.plugin.callCommand (function() {
                Api.ReplaceTextSmart (Asc.scope.arr);
            });
            break;
    }
});
```
