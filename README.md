# vml-button-generator
The **first Dynamic and Flexible padding based VML Triangle Generator** !


This **generator** provides the **html and vml code** needed to create **rounded buttons** on all email clients. The particularity of this generator is that it takes into account **color contrast** for **better accessibility**, and above all, it is the only vml button generator to be **based solely on padding**. Here we are based on the visual rendering rather than on a fixed size and height. It is also possible to add a border, bold or uppercase text. The generator is limited to the only code necessary to create the button, instructs the integrator to insert it correctly in his email at the level of a cell or a div.

Unlike other generators, this one offers minimal CSS code to overcome display problems in Darkmode.

The generator uses the outerHeight() function to calculate the height of the button on the fly. 

To obtain the value of the arcsize, we retrieve the border-radius in pixel inserted by the user, and divide it by the height of the block, multiplied by 100. 
```arcsize=Math.ceil($('#bRadius').val()/$(cssBtnClass).outerHeight()*100);```

To obtain the value of letter-spacing in HTML, we retrieve the value of padding left and padding-right multiplied by 79.5, divided by 100. ```letterspacing=Math.ceil($('#lrPadding').val()*79.5/100)+'px';```
 
I multiply the font size by 1.5 to get the line height. 
```lineHeight=Math.ceil($('#fontSize').val()*1.5);```

Thus, to calculate the value of the mso-text-raise attribute I take the value of the line-height minus the font size, multiplied by 77.7, all divided by 100.
```msoTextRaise=Math.ceil((lineHeight - $('#fontSize').val())*77.7/100)+'px';```

For the moment these are the values and the fastest calculation method to get a vml button equivalent to the same button in html version. It's obviously not pixel perfect, but visually the differences are imperceptible.
