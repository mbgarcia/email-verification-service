$(document).ready(function () {
	var urlParams = new URLSearchParams(location.search);
		
	if (urlParams.has('token')){
		var token = urlParams.get('token');
		
		console.log('[' + token + ']');
		verifyToken(token);
	}
});

function verifyToken(tokenValue) {
	$.getJSON('http://localhost:8000/users/email-verification', {token:tokenValue})
	.done(function(data){
		
		console.log(data);
		
		var json = "<pre>"
			+ JSON.stringify(data, null, 4) 
			+ "</pre>";
    
		$('#result').html(json);
				
		if (data["verified"] == true){
			$('#token-valid').attr('style', 'display: block !important');
			$('#token-invalid').attr('style', 'display: none !important');		
		} else if (data["verified"] == false){
			$('#token-valid').attr('style', 'display: none !important');
			$('#token-invalid').attr('style', 'display: block !important');			
		}
	});
}