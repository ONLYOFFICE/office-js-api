# initDataType

The data type selected in the editor and sent to the plugin:
**text** - the text data,
**html** - HTML formatted code,
**ole** - OLE object data,
**desktop** - the desktop editor data,
**destop-external** - the main page data of the desktop app (system messages),
**none** - no data will be send to the plugin from the editor,
**sign** - the sign for the keychain plugin.

## Type

Enumeration

## Values

- "text"
- "html"
- "ole"
- "desktop"
- "destop-external"
- "none"
- "sign"


## Example

```javascript editor-xlsx
var config = {
    "variations": [
        {
            "initDataType": "ole",
            ...
        }
    ]
};
```
