var passCheckCustom = {
  flg1: false,
  flg2: false,
  flg3: false,

  check_eng: function (elm) {
    //英字チェック
    if (elm && elm.value.match(/[a-zA-Z]/)) {
      passCheckCustom.flg1 = "eng";
      console.log("eng");
    } else if ((elm && !elm.value) || (elm && elm.value.match(/[^a-zA-Z]/))) {
      passCheckCustom.flg1 = false;
    }
    return passCheckCustom.flg1;
  },
  check_num: function (elm) {
    //数字チェック
    if (elm && elm.value.match(/[0-9]/)) {
      passCheckCustom.flg2 = "num";
      console.log("num");
    } else if ((elm && !elm.value) || (elm && elm.value.match(/[^0-9]/))) {
      passCheckCustom.flg2 = false;
    }
    return passCheckCustom.flg2;
  },
  check_ketasu: function (elm) {
    //桁数チェック
    if (elm && elm.value.length > 7 && elm.value.length < 17) {
      passCheckCustom.flg3 = "ketasu";
      console.log("桁数");
    } else if (
      (elm && !elm.value) ||
      (elm && elm.value.length < 8) ||
      (elm && elm.value.length > 16)
    ) {
      passCheckCustom.flg3 = false;
    }
    return passCheckCustom.flg3;
  },
  event: function () {
    //classの付与
    let actviveClass = document.getElementsByClassName("pass-check-item");
    if (actviveClass) {
      for (let i = 0; i < actviveClass.length; i++) {
        //英字チェックactive
        if (
          passCheckCustom.check_eng() == "eng" &&
          actviveClass[i].innerText == "英字"
        ) {
          actviveClass[i].classList.add("active");
        } else if (actviveClass[i].innerText == "英字") {
          actviveClass[i].classList.remove("active");
        }
        //数字チェックactive
        if (
          passCheckCustom.check_num() == "num" &&
          actviveClass[i].innerText == "数字"
        ) {
          actviveClass[i].classList.add("active");
        } else if (actviveClass[i].innerText == "数字") {
          actviveClass[i].classList.remove("active");
        }
        //桁数チェックactive
        if (
          passCheckCustom.check_ketasu() == "ketasu" &&
          actviveClass[i].innerText == "桁数"
        ) {
          actviveClass[i].classList.add("active");
        } else if (actviveClass[i].innerText == "桁数") {
          actviveClass[i].classList.remove("active");
        }
      }
    }
  },
  click: function (elm) {
    let passInput = document.getElementById("passWord");
    if (elm && elm.checked && passInput.type == "password") {
      passInput.type = "text";
    } else {
      passInput.type = "password";
    }
  },
};
