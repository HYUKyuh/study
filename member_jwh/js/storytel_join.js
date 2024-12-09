function validateForm() {
  let f = document.form;
  const reg_exp = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,10}$");
  const match = reg_exp.exec(f.id.value);

  // 아이디 
  if (match == null) {
    alert("6~10자의 영문자,숫자,특수기호를 조합하여 입력해주세요.");
    return false;
  }

  // 비밀번호 + 비밀번호 확인
  const x1 = document.forms["form"]["pass1"].value;
  const x2 = document.forms["form"]["pass2"].value;
  if (x1 != x2) {
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  }

  // 이메일
  const x3 = document.forms["form"]["email"].value;
  if (x3 == null || x3 == "") {
    alert("이메일을 입력하세요.");
    return false;
  }

  // 연락처
  const x4 = document.forms["form"]["tel"].value;
  if (x4 == null || x4 == "") {
    alert("연락처를 입력하세요.");
    return false;
  }

}