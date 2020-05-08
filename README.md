# alert


   Sistema de alerta mediante mensajes acumulables. Estos mensajes se eliminan luego de cierto tiempo.
      
      El metodo de empleo es: 
          <script> 
               msj('Este es mi mensaje'); 
               msj('Este es un mensaje de Error', 'e');
               msj('Este es otro mensaje de Error', 'error');
          </script>
      
    
   
   Tambien consta de un sistema modal para confirmación de acciones.
   
         El metodo de empleo es: 
           <button onclick="confirmation( 'Seguro que quieres hacerlo?' , ()=>{ console.log('Se confirmo') } )"></button>
         
         otra forma es:
              
              function MyFunction(){
              
                confirmation('Confirma ejecutar la función?', ()=>{
                  
                    console.log('Mi codigo aqui..');
                    
                })
              
              
              }
          
