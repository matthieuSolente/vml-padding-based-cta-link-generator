(function( $ ) {
 
    var urlLink;
    var btnText;
    var btnClass;
    var cssBtnClass;
    var backgroundColor;
    var fontColor;
    var borderColor;
    var fontFamily;
    var fontSize;
    var tbPadding;
    var lrPadding;
    var bRadius;
    var bordervml;  
    var bgcss;
    var bgvml;
    var bordercss;
    var generateCode;
    var generateCss;
    var arcsize;
    var align;
    var letterspacing;
    var msoTextRaise;
    var lineHeight;
 function updateButton() { 
    urlLink=$('#linkUrl').val();
    btnText=$('#btnText').val();
    if(btnClass!==''){
      btnClass='class="'+$('#btnClass').val()+'"';
    }
    cssBtnClass='.'+$('#btnClass').val();
    fontFamily=$('#fontFamily').val();
    fontSize=$('#fontSize').val()+'px';
    fontColor=$('#fontColor').val();
    borderColor=$('#borderColor').val();
    borderwidth= $('#borderWidth').val();
    if($('#borderWidth').val()==='0'){
      bordercss='';
      bordervmlwidth='';
      bordervml='';
    }else{
    bordercss='border:'+borderwidth+'px solid '+ $('#borderColor').val()+';';
    bordervmlwidth='strokeweight="'+borderwidth+'px"';
    bordervml='strokecolor="'+$('#borderColor').val()+'"';
    }
    tbPadding=$('#tbPadding').val()+'px';
    lrPadding=$('#lrPadding').val()+'px';
    align=$('#align').val();
    bRadius=$('#bRadius').val()+'px';
    bgColor=$('#bgColor').val();
    bgcss='background-color:'+$('#bgColor').val();
    bgvml='fillcolor="'+$('#bgColor').val()+'"';
    arcsize=Math.ceil($('#bRadius').val()/$(cssBtnClass).outerHeight()*100); 
    letterspacing=Math.ceil($('#lrPadding').val()*79.5/100)+'px';
    lineHeight=Math.ceil($('#fontSize').val()*1.5);
    msoTextRaise=Math.ceil((lineHeight - $('#fontSize').val())*77.7/100)+'px';

    if($('#fontBold').is(':checked')){
      fontBold='font-weight:bold;'
    }else{
      fontBold='';
    }
     if($('#textTransform').is(':checked')){
      textTransform='text-transform:uppercase;'
    }else{
      textTransform='';
    }
  

  generatePreview = '<!--[if mso]>\n<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="mso-position-horizontal:'+align+';v-text-anchor:middle;mso-wrap-style:none" arcsize="'+arcsize+'%" '+bordervml+' '+bordervmlwidth+' '+bgvml+'>\n<w:anchorlock/>\n<v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true">\n<center>\n<![endif]-->\n<a '+btnClass+' href="'+urlLink+'" style="'+bordercss+' font-family: '+fontFamily+'; font-size:'+fontSize+'; mso-line-height-rule: exactly;line-height:1.5; background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+tbPadding+' '+lrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; border-radius:'+bRadius+'; mso-border-alt: none;mso-padding-alt:0px;">\n<!--[if mso]><span style="mso-text-raise:'+msoTextRaise+';letter-spacing:'+letterspacing+';mso-font-width:-100%;" hidden>&#847;</span><![endif]-->'+btnText+'<!--[if mso]><span style="mso-text-raise:-'+msoTextRaise+';letter-spacing:'+letterspacing+';mso-font-width:-100%;" hidden>&#847;</span><![endif]--></a>\n<!--[if mso]>\n</center>\n</v:textbox>\n</v:roundrect>\n<![endif]-->';
  generateCode = '&lt;!--[if mso]&gt;\n&lt;v:roundrect xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:w=&quot;urn:schemas-microsoft-com:office:word&quot; style=&quot;mso-position-horizontal:'+align+';v-text-anchor:middle;mso-wrap-style:none&quot; arcsize=&quot;'+arcsize+'%&quot; '+bordervml+' '+bordervmlwidth+' '+bgvml+'&gt;\n&lt;w:anchorlock/&gt;\n&lt;v:textbox inset=&quot;0,0,0,0&quot; style=&quot;mso-fit-shape-to-text:true&quot;&gt;\n&lt;center&gt;\n&lt;![endif]--&gt;\n&lt;a '+btnClass+' href=&quot;'+urlLink+'&quot; style=&quot;'+bordercss+' font-family: '+fontFamily+'; font-size:'+fontSize+'; mso-line-height-rule: exactly;line-height:1.5; background-color:'+ bgColor +';text-decoration: none;text-underline-color:'+bgColor+';'+textTransform+' padding: '+tbPadding+' '+lrPadding+'; color:'+fontColor+';'+fontBold+' display:inline-block; border-radius:'+bRadius+'; mso-border-alt: none;mso-padding-alt:0px;&quot;&gt;\n&lt;!--[if mso]&gt;&lt;span style=&quot;mso-text-raise:'+msoTextRaise+';letter-spacing:'+letterspacing+';mso-font-width:-100%;&quot; hidden&gt;&amp;#847;&lt;/span&gt;&lt;![endif]--&gt;'+btnText+'&lt;!--[if mso]&gt;&lt;span style=&quot;mso-text-raise:-'+msoTextRaise+';letter-spacing:'+letterspacing+';mso-font-width:-100%;&quot; hidden&gt;&amp;#847;&lt;/span&gt;&lt;![endif]--&gt;&lt;/a&gt;\n&lt;!--[if mso]&gt;\n&lt;/center&gt;\n&lt;/v:textbox&gt;\n&lt;/v:roundrect&gt;\n&lt;![endif]--&gt;'; 
  
  if($('#fontColor').val()==='#ffffff'||$('#fontColor').val()==='#fff'){
    generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n '+cssBtnClass+'{\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#FFFFFF 0 100000\,100000 \#FFFFFF 0 100000&quot;;\ncolor:#000000 !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
  }else if($('#fontColor').val()==='#000000'){
    generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nmso-style-textfill-type:gradient;\n mso-style-textfill-fill-gradientfill-stoplist:&quot;0 \#000000 1 100000\,99000 \#000000 1 100000&quot;;\ncolor:#ffffff !important;\n background: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
  }else{
   generateCss = '&lt;!--[if gte mso 16]&gt;\n&lt;style&gt;\n'+cssBtnClass+'{\nbackground: transparent !important;\n}\n&lt;/style&gt;\n&lt;![endif]--&gt;';
  }

  $('#preview').html(generatePreview);
  $('#code').html(generateCode);
  if($('#fontColor').val()){
    $('#css-code').show();
    $('#css').html(generateCss);
  }else{
    $('#css-code').hide();
    $('#css').html('');
  }
    


}

/*end UpdateButton*/
$(document).ready(function(){
  updateButton();
})
$( "input, select" ).on('change',function() {
  updateButton();
});

})(jQuery);