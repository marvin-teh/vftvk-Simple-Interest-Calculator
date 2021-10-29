function compute(){
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = parseInt(document.getElementById("time").value, 10);

    if(p == ""){
      alert("Please enter a principal amount");
      document.getElementById("principal").focus();
      return false;
    }
    if(p <= 0){
      alert("Please enter a positive number for the principal amount");
      document.getElementById("principal").focus();
      return false;
    }
    if(r == ""){
      alert("Please select the interest rate");
      document.getElementById("rate").focus();
      return false;
    }
    if(t == ""){
      alert("Please select number of years");
      document.getElementById("time").focus();
      return false;
    }

    document.getElementById("p_text").innerHTML = "If you deposit ";
    document.getElementById("p_result").innerHTML = p;

    document.getElementById("r_text").innerHTML = "at an interest rate of "
    document.getElementById("r_result").innerHTML = r + '% ';
    document.getElementsByClassName("comma")[0].innerHTML = ', '

    document.getElementById("i_text").innerHTML = "you will receive an amount of ";
    document.getElementById("i_result").innerHTML = calculate_simple_interest(p, r, t);

    var future_year = new Date().getFullYear() + t;
    document.getElementById("t_text").innerHTML = "in the year ";
    document.getElementById("t_result").innerHTML = future_year;
}

function update_rate(){
  var rate_val = document.getElementById("rate").value;
  document.getElementById('current-rate').innerHTML = rate_val + ' %';
}

function calculate_simple_interest(p, r, t){
  r = r / 100;
  var a = p * (1 + r * t);
  return a - p;
}
