//problema 1 de tarea wiiiiii uwu mio uwu/

function problema1(){

    var p1_input = document.querySelector('#p1-input').value;



    //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
    //dentro de un array

    var p1_array = p1_input.split(' ').reverse();

  

      //dentro de un array
      //dentrodeunarray
      //alreves
      //separar
    
    var p1_res = '';


    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}



//problema 2
function problema2(){
    //lo primero que necesito es obtener los valores por parte de los campos de html
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el minimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son
    con el maximo valor de un vector por el minimo valor del otro
    vector
    
    */

    //construir vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores 
    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    //invertir el vector 2
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    //imprimir el resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar minimo : '+p2_producto;
}


//el tres queda de tarea wiiiiiiiiiii y hago el 1 wiiiiiiiiiii
function problema3(){

    var p3_input = document.querySelector('#p3-input').value;



    //tenemos que detectar la coma, tendria que dividir la cadena y colocarla
    //dentro de un array

    var p3_array = p3_input.split(',');
    var array = p3_input.split('');
    /* Algoritmo creado en c++
    #include <bits/stdc++.h>
    using namespace std;

    int main()
    {
    string cadena,aux="",aux2;
    int n,a=1;
    cin>>cadena;
    n=cadena.length();
    string array[n];
    for(int i=0;i<n;i++){
        array[i]=cadena[i];
    }
    if(n!=1){
    for(int j=0;j<n;j++){
        aux=array[j];
        for(unsigned int i=0; aux[i]!='\0'; i++){
        aux[i]=toupper(aux[i]);
        }
        array[j]=aux;
    }
    sort(array,array+n);
    aux=array[0];
    for(int j=0;j<n-1;j++){
        if(aux!=array[j+1]){
            a++;
            aux=array[j+1];
        }
    }}
    cout<<a;
    return 0;
}

    
    */
  

      //dentro de un array
      //dentrodeunarray
      //alreves
      //separar
    
    var aux="";
    var a=1;
    var aux2;
    var n=p3_array.length;
    for(var i=0;i<n;i++){
        array[i]=p3_array[i];
    }
    if(n!=1){
    toUpperCase(aux);
    sort(array,array+n);
    aux=array[0];
    aux=aux.split('');
    for(var j=0;j<n-1;j++){
        if(aux!=array[j+1]){
            a++;
            aux=array[j+1];
        }
    }}
    document.querySelector('#p3-output').textContent = a;

}