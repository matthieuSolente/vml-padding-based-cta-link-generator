# VML Padding Based CTA Link generator
## The **first Dynamic and Flexible padding based VML CTA Link Generator** !

See a working example on [codepen](https://codepen.io/matthieuSolente/pen/ExdgdJL)
This **generator** provides the **html and vml code** needed to create **rounded buttons** on all email clients. The particularity of this generator is that it takes into account **color contrast** for **better accessibility**, and above all, it is the only vml button generator to be **based solely on padding**. Here we are based on the visual rendering rather than on a fixed size and height. It is also possible to add a border, bold or uppercase text. The generator is limited to the only code necessary to create the button, The integrator must have the necessary bases to implement it in an email, at the level of a cell or a div.

### CSS
Unlike other generators, this one offers minimal CSS code to overcome display problems in Darkmode. For any color, the basic css code is as follows:

```css
<!--[if gte mso 16]>
<style>
.my-class{
background: transparent !important;
}
</style>
<![endif]--> 
```

And if you choose pure white or pure black, you'll get the wordkaround to keep the text white or black on outlook (windows),i.e

```css 
<!--[if gte mso 16]>
<style>
 .my-class{
mso-style-textfill-type:gradient;
 mso-style-textfill-fill-gradientfill-stoplist:"0 #FFFFFF 0 100000,100000 #FFFFFF 0 100000";
color:#000000 !important;
 background: transparent !important;
}
</style>
<![endif]--> 
```


### No width and height
The generator uses the outerHeight() function to calculate the height of the button on the fly. 

### Arcise
To obtain the value of the arcsize, we retrieve the border-radius in pixel inserted by the user, and divide it by the height of the block, multiplied by 100. 

```javascript
arcsize=Math.ceil($('#bRadius').val()/$(cssBtnClass).outerHeight()*100);
```

### Letter spacing ( abandoned after Outlook update)
To obtain the value of letter-spacing in HTML, we retrieve the value of padding left and padding-right multiplied by 79.5, divided by 100. 

```javascript
letterspacing=Math.ceil($('#lrPadding').val()*79.5/100)+'px';
```

### Line height ( abandoned after Outlook update)
I multiply the font size by 1.5 to get the line height. 

```javascript
lineHeight=Math.ceil($('#fontSize').val()*1.5);
```

### Mso-text-raise (abandoned after Outlook update )
Thus, to calculate the value of the mso-text-raise attribute I take the value of the line-height minus the font size, multiplied by 77.7, all divided by 100.

```javascript
msoTextRaise=Math.ceil((lineHeight - $('#fontSize').val())*77.7/100)+'px';
```

## Outlook update in 2023

In place of the abandoned properties, following the Outlook update, I first took the work of Mark Robbins and his [pedantic semantic button](https://www.goodemailcode.com/email-code/link-button) to recreate the horizontal and vertical padding for Outlook. Here are the calculation methods

### Top and bottom padding

To reproduce the vertical padding and get the em value, we take the value indicated by the user and divide it by the overall font size
```javascript
emTbPadding = ($('#tbPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```
### Left and right padding   

To reproduce the vertical padding and get the em value, we take the value indicated by the user and divide it by the overall font size
 
```javascript
emLrPadding = ($('#lrPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```  
### mso-font-width  

To indicate the value of the mso-font-width property: we take the horizontal padding, which we divide by the global font size. We then divide the local policy by the global policy. Then, we divide the first value by the second. Finally, we multiply the result by 100 to get the percentage.

```javascript
msoFontWidth = Math.ceil(($('#lrPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```
### Vertical padding for Outlook 

In Mark version, hre he uses percentage. To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding, and multiply the result by two

```javascript
msoTextRaise = Math.ceil(($('#tbPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)*2+'%';
```
### Horizontal padding for Outlook 

To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding.
```javascript
htmlMsoTextRaise = Math.ceil(($('#tbPadding').val()/$('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```

## Update 2025

Mark's version is perfect for his pure html version. But when we surround the link with a vml component, `v:roundrect` alone or with `v:textbox`, there are big visible differences between the rendering on Outlook and that on other mailboxes. With or without 'v:textbox', the 'v:roundrect' component oddly adds vertical padding. By inspecting the code on an Outlook mailbox, we see that the latter transforms the code, but despite measures that seem consistent, this vertical padding persists.

For the `mso-text-raise` values, I looked for values ​​that allowed almost equivalent rendering on Outlook, and I arrived at this formula. Rather than the percentage, I play on the unit in points.

```javascript
msoTextRaise =(($('#tbPadding').val() * 75 / 100)*(80/100) /2).toFixed(2)+'pt';
```

We take the vertical padding and multiply it by 75 divided by 100 to obtain the point value. As is, the value, although correct, does not reduce the additional padding. After numerous tests, I found that by taking 80% of this value and dividing it by 2, we arrived at an almost identical result between Outlook and the other mailboxes. 

Even if the calculation seems convoluted, the rendering is much better than if we apply a simple v:roundrect component around the pedantic semantic button. I noticed that the mso-text-raise property could take negative values ​​to render the padding-top. We can therefore simplify the formula as follows. There are therefore only two <i> tags which surround the link text, and which respectively include the horizontal padding and the padding-bottom, then the padding-horizontal and the padding-top

```
<!--[if mso]><i style="mso-font-width:250%;mso-text-raise:3.00pt" hidden>&emsp;</i><![endif]-->Show me the button!<!--[if mso]><i style="mso-font-width:250%;mso-text-raise:-3.00pt" hidden>&emsp;&#8203;</i><![endif]-->
```

So try it and enjoy !! Of course, if you notice any areas for improvement, don't hesitate to let me know!

