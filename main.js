//FORM VALIDAÇÃO
$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            mensagem:{
                required:true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, insira seu mensagem'

        },
        submitHandler: function(form){  
            form.submit();
        }   
    })
});