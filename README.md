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


In place of the abandoned properties, following the Outlook update, I took the work of Mark Robbins and his pedantic semantic button to recreate the horizontal and vertical padding for Outlook. Here are the calculation methods
### Top and bottom padding

To reproduce the vertical padding, we take the value indicated by the user and divide it by the overall font size
```javascript
emTbPadding = ($('#tbPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```
### Left and right padding   
 To reproduce the vertical padding, we take the value indicated by the user and divide it by the overall font size
 
```javascript
emLrPadding = ($('#lrPadding').val() / $('#fontBase').val()).toFixed(1)+'em';
```  
### mso-font-width  
To indicate the value of the mso-font-width property: we take the horizontal padding, which we divide by the global font size. We then divide the local policy by the global policy. Then finally, we divide the first value by the second.

```javascript
msoFontWidth = Math.ceil(($('#lrPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```
### mso-text-raise 
To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding, and multiply the result by two

```javascript
msoTextRaise = Math.ceil(($('#tbPadding').val() / $('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)*2+'%';
```
### mso-text-raise 
To obtain the value of the mso-text-raise property, same thing, except that we take the vertical padding.
```javascript
htmlMsoTextRaise = Math.ceil(($('#tbPadding').val()/$('#fontBase').val()) / ($('#fontSize').val() / $('#fontBase').val())*100)+'%';
```



For the moment these are the values and the fastest calculation method to get a vml button equivalent to the same button in html version. It's obviously not pixel perfect, but visually the differences are imperceptible.
