function prueba(numero){
    let sum=0;
    for(let index=0; index<=10; index++){
        const element=index*index;
        sum=sum+element;
    }

    if([].length==0){
        console.log('Es un arreglo vacio');
    }

    let count=0;
    while (console<100){
        console.log(count);
        count ++;
    }switch (numero) {
        case 1:
            console.log('Soy el numero 1');
            break;
        case 2:
            console.log('Soy el numero 2');
        break;
    
        default:
            console.log('soy otro numero');
            break;
    }
    return sum;
}
    prueba(1);

    let objeto={
        nombre:'objeto 1', 
        calzado: 9,
        datos:{
            prro:'rexxxxxx',
            edad:8
        },
        metodo:function(params){
            return params;
        },
        mascotas:[{
        nombre:'prrrrros',
        edad:8    
        },{
         nombre:'pppp',   
         edad:'kpdo'
        }]
    };
    let funcion=function(params){

        return params*2;
    }

    console.log('[Object]:',objeto.nombre);
    console.log(objeto.datos.prro);
    console.log(objeto.metodo('hola desde objeto.metodo'));
    console.log(funcion(6));
    
    console.log(
    (function (){

        return 'ke sta psando';

    })()
);
    console.log(objeto.mascotas[0].nombre);
    (function(obj){
        for(let mascota of obj){
            console.log(mascota);
        }
    })(objeto.mascotas);

    for(let key in objeto){
        console.log(key);
        console.log(objeto[key]);
    }