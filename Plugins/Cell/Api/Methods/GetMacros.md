# GetMacros

Returns the document macros.

## Syntax

expression.GetMacros();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Macros](../../Enumeration/Macros.md)

## Example

```javascript
window.Asc.plugin.executeMethod ("GetMacros", [JSON.stringify(Content)], function(data) &#123;

    try
    &#123;
        Content = JSON.parse (data);

        for (var i = 0; i &lt; Content.macrosArray.length; i++)
        &#123;
            var value = Content.macrosArray[i].name;
            if (undefined === value)
                value = "";

            value = value.replace (/&/g,'&amp;');
            value = value.replace (/&lt;/g,'&lt;');
            value = value.replace (/&gt;/g,'&gt;');
            value = value.replace (/'/g,'&apos;');
            value = value.replace (/"/g,'&quot;');

            Content.macrosArray[i].name = value;
        &#125;
    &#125;
    catch (err)
    &#123;
        Content = &#123;
            macrosArray : [],
            current : -1
        &#125;;
    &#125;
&#125;);
