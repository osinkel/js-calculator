  function insert(num){

    document.form.textview.value=document.form.textview.value+num;
  }    
  function clean(){
    document.form.textview.value="";
  }
  function back(){
    var value = document.form.textview.value;
    document.form.textview.value=value.substring(0, value.length-1);
  }
  function equal(){
    var value = document.form.textview.value;
    if(value){
      document.form.textview.value=eval(value);
    }
  }
  function rounding(){
    var value = document.form.textview.value;

    document.form.textview.value=Math.ceil(value);
  }
  function thx(){
  var value = document.form.textview.value;

    document.form.textview.value=Math.tanh(value);
  }
  function exponenta(){
    var value = document.form.textview.value;

    document.form.textview.value=Math.exp(value);
  }
  function absolute(){
    var value = document.form.textview.value;

    document.form.textview.value=Math.abs(value);
  }