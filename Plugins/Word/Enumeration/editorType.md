# editorType

The editors which the plugin is available for:
**word** - text document editor,
**cell** - spreadsheet editor,
**slide** - presentation editor,
**pdf** - pdf editor.

## Type

Enumeration

## Values

- "word"
- "cell"
- "slide"
- "pdf"


## Example

```javascript editor-docx
var config = {
    "variations": [
        {
            "EditorsSupport": ["word", "cell", "slide"],
            ...
        }
    ]
};
```
