function fontZoomA(){
	 document.getElementById('fontzoom').style.fontSize='12px';
	 document.getElementById('fontzoom').style.lineHeight='34px';
	allChanges("12px","34px");
        document.getElementById('big').style.color='#999999';
        document.getElementById('media').style.color='#999999';
        document.getElementById('small').style.color='red';
	}
	function fontZoomB(){
	 document.getElementById('fontzoom').style.fontSize='16px';
	 document.getElementById('fontzoom').style.lineHeight='34px';
        document.getElementById('big').style.color='#999999';
        document.getElementById('media').style.color='red';
        document.getElementById('small').style.color='#999999';

 	 allChanges("16px","34px");
	}
	function fontZoomC(){
        document.getElementById('fontzoom').style.fontSize='20px';
	document.getElementById('fontzoom').style.lineHeight='34px';
        document.getElementById('big').style.color='red';
        document.getElementById('media').style.color='#999999';
        document.getElementById('small').style.color='#999999';
	allChanges("20px","34px");
	}
	function allChanges(_fontSize,_lineHeight){
		 var allSpan=document.getElementById('fontzoom').getElementsByTagName('*');
		
		 for(var i=0;i<allSpan.length;i++){
			 allSpan.item(i).style.fontSize=_fontSize;
			 allSpan.item(i).style.lineHeight=_lineHeight;
		 }
		
	 }
	function printPage()
	{
		document.body.innerHTML="<h2  style='text-align: center;font-size:32px; line-height:32px; font-weight:bold; margin-bottom:35px;font:normal 32px/64px arial;text-align: center;'>"+document.getElementById('fonttitle').innerHTML +'</h2><br/><div style="font:normal 18px/35px arial;text-align:left;">'+ document.getElementById('fontzoom').innerHTML+"</div>";
		window.print();

	}