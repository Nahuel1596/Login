var usuario;
var contrasenia;
var char_posible="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var letras_mayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var contIntentos=5;


function Alertar()
{
    usuario=document.getElementById("usuario").value;   //obtengo usuario
    contrasenia=document.getElementById("contrasenia").value;     //obtengo contraseña
    
    var userAlfa=VerificarAlfanumerico(usuario);
    var userVacio=verificarVacio(usuario);
    var ResultUsuario=userAlfa && !userVacio;

    
    var passAlfa=VerificarAlfanumerico(contrasenia);
    var longiPass=verificarlong(contrasenia);
    var PassVacia=verificarVacio(contrasenia);
    var PassMayus=VerificarMayus(contrasenia);
    var ResulPass=passAlfa && longiPass && !PassVacia && PassMayus;

    if(contIntentos!=1)
    {
        if(ResultUsuario==true && ResulPass==true)
        {
            if(usuario=="joan1234")                     //usuario inexistente
            {
                alert("Usuario o contraseña invalido")
            }
            if(usuario=="joan12")                     //usuario para bloquear
            {
                contIntentos-=1;
                alert(contIntentos+" intentos disponibles")
            }
            else
            {
            alert("bienvenido ...") 
            }  
        }
        else
        {
            alert("Usuario o contraseña invalido");
        }
    }
    else
    {
        alert("Usuario o contraseña invalido");
        alert("usuario bloqueado");
    }
    
}

function RecuperarPass()
{
    usuario=document.getElementById("usuario").value;

    UsuarioAlfaNum=VerificarAlfanumerico(usuario);
    UsuarioVacio =verificarVacio(usuario);

    ResulUsuario=UsuarioAlfaNum && !UsuarioVacio;

    if(verificarVacio(usuario))
        alert("Debe ingresar un usuario registrado");
    if(!ResulUsuario || usuario=="joan1234")
        alert ("el usuario no es valido, y no se puede recuperar contraseña");
    else
        alert("Se envio un Email con la contraseña correo vinculado con el usuario ingresado");
}

function verificarlong(texto)
{
    if(texto.length>=8)
        return true;
    else
        return false;
}

function verificarVacio(texto)
{
    if(texto.length==0)
        return true;
    else
        return false;
}




function VerificarAlfanumerico (texto)
{
    var ContAlfa;
    for (i=0; i< texto.length;i++)
    {
        var ContAlfa=0;
        for (j=0; j< char_posible.length;j++)
        {
            if(texto.charAt(i)==char_posible.charAt(j))
                ContAlfa+=1;
        }
        if(ContAlfa==0)         //si encontro simbolo
            return false;
    }
    return true;
}

function VerificarMayus(texto)
{
    var cont=0;
    for (i=0; i< texto.length;i++)
    {
        for (j=0; j< letras_mayusculas.length;j++)
        {
            if(texto.charAt(i)==letras_mayusculas.charAt(j))
                cont+=1;
        }
    }
    if (cont>0)
        return true;
    else
        return false;
}