# GetMacros

Returns the document macros.

## Syntax

```javascript
expression.GetMacros();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Macros](../../Enumeration/Macros.md)

## Example

```javascript editor-pptx
window.Asc.plugin.executeMethod ("GetMacros", [JSON.stringify(Content)], function(data) {

    try
    {
        Content = JSON.parse (data);

        for (var i = 0; i < Content.macrosArray.length; i++)
        {
            var value = Content.macrosArray[i].name;
            if (undefined === value)
                value = "";

            value = value.replace (/&/g,'&amp;');
            value = value.replace (/</g,'&lt;');
            value = value.replace (/>/g,'&gt;');
            value = value.replace (/'/g,'&apos;');
            value = value.replace (/"/g,'&quot;');

            Content.macrosArray[i].name = value;
        }
    }
    catch (err)
    {
        Content = {
            macrosArray : [],
            current : -1
        };
    }
});
```
