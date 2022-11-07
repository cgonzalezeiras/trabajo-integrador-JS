
const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;
let categoriaSeleccionada = 0;


function resetTotalPagar()
{

   let totalPago       = document.getElementById("totalAPagar");
   quitarClaseError();
   totalPago.innerHTML="";    
}


function quitarClaseError()  
{
   let x=document.querySelectorAll(".form-control,.form-select");
   let i;

   for(i=0;i<x.length;i++) 
   {
      x[i].classList.remove("is-invalid");
   }   
}

function totalPagar()
{  

   let nombre          = document.getElementById("nombre");
   let apellido        = document.getElementById("apellido");
   let mail            = document.getElementById("mail");
   let cantidadTickets = document.getElementById("cantidadTickets");
   let categoria       = document.getElementById("categoriaSelect");
   let totalPago       = document.getElementById("totalAPagar");
   let error = false; 
   let errorEmail = document.getElementById("errorEmail");

   console.log("Hola");
   

   quitarClaseError(); 

   //para validar datos


   if(nombre.value=="") 
    {
    nombre.classList.add("is-invalid");
    nombre.focus();
    error=true;
    }


    if(apellido.value=="") 
    {
    apellido.classList.add("is-invalid");
    apellido.focus();
    error=true;
    }

   const emailValido = mail => 
   {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);   
   }


   if(!emailValido(mail.value))
   {
      errorEmail.innerText="El email está mal escrito...";
      if(mail.value=="") 
      {
         errorEmail.innerText="Ingrese su email";
      }
      mail.classList.add("is-invalid");
      mail.focus();
      error=true;   
   }
 
    if( (cantidadTickets.value<=0) || (isNaN(cantidadTickets.value)) )
    {
    errorCantidad.innerText="Ingrese cantidad";
    cantidadTickets.classList.add("is-invalid");
    cantidadTickets.focus();
    error=true;
    }


    console.log(categoria)
    if(categoriaSeleccionada==0)
    {
   

    errorCategoria.innerText="Elegir categoría";
    categoria.classList.add("is-invalid");
    categoria.focus();
    error=true;
    }

   if(error) return;
   console.log("///////");
    


  let totalValorTickets=(cantidadTickets.value)*valorTicket;

   
   if(categoriaSeleccionada==0)
   {
   console.log("0");   
   totalValorTickets=totalValorTickets;
   }

   if(categoriaSeleccionada==1)
   {
   console.log("80%");
   totalValorTickets=totalValorTickets-descuentoEstudiante/100*totalValorTickets;
   }


   if(categoriaSeleccionada==2)
   {
   console.log("50%");
   totalValorTickets=totalValorTickets-descuentoTrainee/100*totalValorTickets;
   }

   if(categoriaSeleccionada==3)
   {
   console.log("15%");
   totalValorTickets=totalValorTickets-descuentoJunior/100*totalValorTickets;
   }

   totalPago.innerHTML=totalValorTickets;

}


function cambiarCategoria(value)
{
console.log(value)
categoriaSeleccionada=value;
}




