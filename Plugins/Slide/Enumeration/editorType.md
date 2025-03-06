# editorType

The editors which the plugin is available for:\n-**word** - text document editor,\n-**cell** - spreadsheet editor,\n-**slide** - presentation editor,\n-**pdf** - pdf editor.

## Type

Enumeration

## Values

- "word"
- "cell"
- "slide"
- "pdf"


## Example

```javascript
var config = {
    "variations": [
        {
            "EditorsSupport": ["word", "cell", "slide"],
            ...
        }
    ]
};
```
