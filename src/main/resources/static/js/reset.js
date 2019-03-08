$('#reset-form').on('submit', function (e) {
	e.preventDefault();
	
	var urlParams = new URLSearchParams(location.search);
	
	var token = urlParams.get('token');
	
	if (!token){
		alert('Token invalido');
		return;
	}
		
	console.log('[' + token + ']');

	var password = document.getElementById('password').value;
	var confirm  = document.getElementById('confirm-password').value;
	
	if (!password){
		alert('Preencher o campo de senha');
		return;
	}
	
	if (!confirm){
		alert('Confirme a senha');
		return;			
	}
	
	if (password !== confirm){
		alert('As senhas não são as mesmas.');
		return;			
	}

	verifyPassword(token, password);
});

function verifyPassword(tokenValue, password) {
	$.ajaxSetup({"contentType": "application/json"})
	
	var json = {token: tokenValue, password: password};
	
	$.post('http://localhost:8000/users/password-reset-validation', JSON.stringify(json))
	.done(function(){
		$('#reset-ok').attr('style', 'display: block !important');		
	})
	.fail(function(){
		$('#reset-not-ok').attr('style', 'display: block !important');
	});
}