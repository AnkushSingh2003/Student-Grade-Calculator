function myfun() {
  var web = document.getElementById("web").value;
  var it = document.getElementById("it").value;
  var math = document.getElementById("math").value;
  var eng = document.getElementById("eng").value;
  var pun = document.getElementById("pun").value;
  if (web == "") {
    document.getElementById("content").innerHTML =
      "plz fill web application marks.";
    return false;
  }
  if (isNaN(web)) {
    document.getElementById("content").innerHTML = "plz fill nubers only.";
    return false;
  }
  if (web > 100) {
    document.getElementById("content").innerHTML = "plz fill correct marks.";
    return false;
  }

  if (it == "") {
    document.getElementById("content").innerHTML = "plz fill IT Tools marks.";
    return false;
  }
  if (isNaN(it)) {
    document.getElementById("content").innerHTML = "plz fill nubers only.";
    return false;
  }
  if (it > 100) {
    document.getElementById("content").innerHTML = "plz fill correct marks.";
    return false;
  }

  if (math == "") {
    document.getElementById("content").innerHTML = "plz fill maths marks.";
    return false;
  }
  if (isNaN(math)) {
    document.getElementById("content").innerHTML = "plz fill nubers only.";
    return false;
  }
  if (math > 100) {
    document.getElementById("content").innerHTML = "plz fill correct marks.";
    return false;
  }

  if (eng == "") {
    document.getElementById("content").innerHTML = "plz fill english marks.";
    return false;
  }
  if (isNaN(eng)) {
    document.getElementById("content").innerHTML = "plz fill nubers only.";
    return false;
  }
  if (eng > 100) {
    document.getElementById("content").innerHTML = "plz fill correct marks.";
    return false;
  }

  if (pun == "") {
    document.getElementById("content").innerHTML = "plz fill punjabi marks.";
    return false;
  }
  if (isNaN(pun)) {
    document.getElementById("content").innerHTML = "plz fill nubers only.";
    return false;
  }
  if (pun > 100) {
    document.getElementById("content").innerHTML = "plz fill correct marks.";
    return false;
  }
  var a =
    parseFloat(web) +
    parseFloat(it) +
    parseFloat(math) +
    parseFloat(eng) +
    parseFloat(pun);

  var b = (a / 500) * 100;

  if (b <= 100 && b > 90) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is a+. you are pass.";
    return false;
  }

  if (b <= 90 && b > 80) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is a. you are pass.";
    return false;
  }

  if (b <= 80 && b > 70) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is b+. you are pass.";
    return false;
  }

  if (b <= 70 && b > 60) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is b. you are pass.";
    return false;
  }

  if (b <= 60 && b > 50) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is c+. you are pass.";
    return false;
  }

  if (b <= 50 && b > 40) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is c. you are pass.";
    return false;
  }

  if (b <= 40 && b > 30) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is d+. you are fail.";
    return false;
  }

  if (b <= 30 && b > 20) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is d. you are fail.";
    return false;
  }

  if (b <= 20 && b > 10) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is e+. you are fail.";
    return false;
  }

  if (b <= 10 && b >= 0) {
    document.getElementById("content").innerHTML =
      "your marks is " +
      a +
      " out of 500,  and your percentage is " +
      b +
      "%" +
      ", and your grade is e. you are fail.";
    return false;
  }
}
