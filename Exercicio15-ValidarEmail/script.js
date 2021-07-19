
function validateEmail(email) {
    var regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    var valid= regex.test(email);

   return valid ? alert('Email digitado é válido'): alert('Email digitado é inválido')
  }
  
