# GetVBAMacros

Returns all VBA macros from the document.

## Syntax

expression.GetVBAMacros();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string | null

## Example

```javascript
window.Asc.plugin.executeMethod ("GetVBAMacros", null, function (data) &#123;
    if (data && typeof data === 'string' && data.includes ('&lt;Module')) &#123;
        var arr = data.split ('&lt;Module ').filter (function (el) &#123;return el.includes ('Type="Procedural"')&#125;);
        arr.forEach (function (el) &#123;
            var start = el.indexOf ('&lt;SourceCode&gt;') + 12;
            var end = el.indexOf ('&lt;/SourceCode&gt;', start);
            var macros = el.slice (start, end);

            start = el.indexOf ('Name="') + 6;
            end = el.indexOf ('"', start);
            var name = el.slice (start, end);
            var index = Content.macrosArray.findIndex (function (macr) &#123;return macr.name == name&#125;);
            if (index == -1) &#123;
                macros = macros.replace (/&amp;/g,'&');
                macros = macros.replace (/&lt;/g,'&lt;');
                macros = macros.replace (/&gt;/g,'&gt;');
                macros = macros.replace (/&apos;/g,'\'');
                macros = macros.replace (/&quot;/g,'"');
                macros = macros.replace (/Attribute [\w \.="\\]*/g,'');
                Content.macrosArray.push (
                    &#123;
                        name: name,
                        value: '(function ()\n&#123;\n\t\n&#125;)();\n\n',
                        guid: create_guid ()
                    &#125;
                );
            &#125;
        &#125;);
    &#125;
    updateMenu ();
    window.CustomContextMenu.init ();
    if (Content.current === -1)
    &#123;
        let event = new Event ("click");
        document.getElementById ("button_new").dispatchEvent (event);
    &#125;
&#125;);
