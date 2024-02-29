let frecuenciaOxxo = "";
let montoPromedio = "";
let acumulaPuntos = "";
let conoceSpin = "";
let comoConoceSpin = "";
let beneficiosSpin = "";
let posibleMedioSpin = "";
let mejorFormaAcumularPuntosV = "";
let mejorFormaRedimirPuntosV = "";
let motivarPremia = "";
let conocerAliados = "";
let comoAliados = "";
let servicioAtractivo = "";
let negocio = "";
let ejemploOtroNegocioV = "";
let serPremia = "";
let motivarPremiaActivo = "";
let faltaPremiaV = "";


function submitForm() {

  const data = {
    frecuenciaOxxo, montoPromedio, acumulaPuntos, conoceSpin, comoConoceSpin, beneficiosSpin, posibleMedioSpin, mejorFormaAcumularPuntosV, mejorFormaRedimirPuntosV, motivarPremia, conocerAliados, comoAliados, servicioAtractivo, negocio, ejemploOtroNegocioV, serPremia, motivarPremiaActivo, faltaPremiaV
  };

  const API_ENDPOINT = "https://api.amplitude.com/2/httpapi";

  const formattedBody = JSON.stringify({
    api_key: "",
    events: [
      {
        user_id: `${userId}`,
        event_type: "mob_test_survey",
        event_properties: data,
      },
    ],
  });
  fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formattedBody,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("API Response:", result);
      appboyBridge.closeMessage();
    })
    .catch((error) => {
      console.error("Error:", error);
      appboyBridge.closeMessage();
    });
}

function frecuenciaVisitaOxxo() {
  frecuenciaOxxo = document.getElementById("frecuencia").value;
  document.getElementById("questionFrecuenciaOxxo").style = "display: none";
  if (frecuenciaOxxo != "No suelo ir al OXXO"){
    document.getElementById("questionMontoPromedio").style = "";
  }else {
    document.getElementById("questionConocerPremia").style = "";
  }
}

function montoPromedioCompra() {
  montoPromedio = document.getElementById("monto").value;
  document.getElementById("questionMontoPromedio").style = "display: none";
  document.getElementById("questionCajero").style = "";
}

function acumularPuntosCajero(){
  acumulaPuntos = document.getElementById("acumularPuntos").value;
  document.getElementById("questionCajero").style = "display: none";
  document.getElementById("questionConocerPremia").style = "";
}

function conocerSpinPremia(){
  conoceSpin = document.getElementById("conocesPremia").value;
  document.getElementById("questionConocerPremia").style = "display: none";
  if (conoceSpin == "Sí"){
    document.getElementById("questionComoConocesPremia").style = "";
  }else {
    document.getElementById("questionMediosPremia").style = "";
  }
}

function comoConocesSpinPremia(){
  comoConoceSpin = document.getElementById("comoConocesPremia").value;
  document.getElementById("questionComoConocesPremia").style = "display: none";
  document.getElementById("questionBeneficiosPremia").style = "";
}

function beneficiosSpinPremia(){
  temp = document.getElementById("beneficiosPremia").selectedOptions;
  var values = Array.from(temp).map(({ value }) => value);
  beneficiosSpin = values
  selectOnlyCertainNumberOptions("beneficiosPremia",3, "questionBeneficiosPremia", "questionFormaAcumularPuntos");
}

function probableMedioSpin(){
  posibleMedioSpin = document.getElementById("mediosPremia").value;
  document.getElementById("questionMediosPremia").style = "display: none";
  document.getElementById("questionFormaAcumularPuntos").style = "";
}

function mejorFormaAcumularPuntos(){
  mejorFormaAcumularPuntosV = document.getElementById("formaAcumularPuntos").value;
  document.getElementById("questionFormaAcumularPuntos").style = "display: none";
  document.getElementById("questionFormaRedimirPuntos").style = "";
}

function mejorFormaRedimirPuntos(){
  mejorFormaRedimirPuntosV = document.getElementById("formaRedimirPuntos").value;
  document.getElementById("questionFormaRedimirPuntos").style = "display: none";
  document.getElementById("questionMotivarPremia").style = "";
}

function motivarUsarPremia(){
  motivarPremia = document.getElementById("motivarPremia").value;
  document.getElementById("questionMotivarPremia").style = "display: none";
  document.getElementById("questionAliadosPremia").style = "";
}

function conocesAliados(){
  conocerAliados = document.getElementById("aliadosPremia").value;
  document.getElementById("questionAliadosPremia").style = "display: none";
  if (conocerAliados == "Sí"){
    document.getElementById("questionMedioAliadosPremia").style = "";
  } else{
    document.getElementById("questionServicioAtractivo").style = "";
  }
}

function comoConocerAliados(){
  comoAliados = document.getElementById("medioAliadosPremia").value;
  document.getElementById("questionMedioAliadosPremia").style = "display: none";
  document.getElementById("questionServicioAtractivo").style = "";
}

function servicioMasAtractivo(){
  temp = document.getElementById("servicioAtractivo").selectedOptions;
  var values = Array.from(temp).map(({ value }) => value);
  servicioAtractivo = values
  selectOnlyCertainNumberOptions("servicioAtractivo",3, "questionServicioAtractivo", "questionPosiblesAliados");
}

function otroNegocio(){
  negocio = document.getElementById("posiblesAliados").value;
  document.getElementById("questionPosiblesAliados").style = "display: none";
  document.getElementById("questionPosiblesAliadosEjemplo").style = "";
}

function ejemploOtroNegocio(){
  ejemploOtroNegocioV = document.getElementById("posiblesAliadosEjemplo").value;
  document.getElementById("questionPosiblesAliadosEjemplo").style = "display: none";
  document.getElementById("questionPartePremia").style = "";
}

function serPartePremia(){
  serPremia = document.getElementById("partePremia").value;
  document.getElementById("questionPartePremia").style = "display: none";
  if (serPremia == "Sí"){
    document.getElementById("questionMotivarPremiaActivo").style = "";
  } else{
    // MANDAR CUESTIONARIO Y CERRAR
    submitForm()
  }
}

function motivarSerPremiaActivo(){
  motivarPremiaActivo = document.getElementById("motivarPremiaActivo").value;
  document.getElementById("questionMotivarPremiaActivo").style = "display: none";
  document.getElementById("questionFaltaPremia").style = "";
}

function faltaPremia(){
  faltaPremiaV = document.getElementById("faltaPremia").value;
  // Cerrar y mandar encuesta
  submitForm()
}

function selectOnlyCertainNumberOptions(question, limit, removePage, changePage){
  var selectChoose = document.getElementById(question);
  var maxOptions = limit;
  var optionCount = 0;
  for (var i = 0; i < selectChoose.length; i++) {
      if (selectChoose[i].selected) {
          optionCount++;
          if (optionCount == maxOptions) {
            document.getElementById(removePage).style = "display: none";
            document.getElementById(changePage).style = "";
          }
      }
  }
}

document.getElementById("frecuencia").addEventListener("change", frecuenciaVisitaOxxo);
document.getElementById("monto").addEventListener("change", montoPromedioCompra);
document.getElementById("acumularPuntos").addEventListener("change", acumularPuntosCajero);
document.getElementById("conocesPremia").addEventListener("change", conocerSpinPremia);
document.getElementById("comoConocesPremia").addEventListener("change", comoConocesSpinPremia);
document.getElementById("mediosPremia").addEventListener("change", probableMedioSpin);
document.getElementById("formaAcumularPuntos").addEventListener("change", mejorFormaAcumularPuntos);
document.getElementById("formaRedimirPuntos").addEventListener("change", mejorFormaRedimirPuntos);
document.getElementById("motivarPremia").addEventListener("change", motivarUsarPremia);
document.getElementById("aliadosPremia").addEventListener("change", conocesAliados);
document.getElementById("medioAliadosPremia").addEventListener("change", comoConocerAliados);
document.getElementById("servicioAtractivo").addEventListener("change", servicioMasAtractivo);
document.getElementById("posiblesAliados").addEventListener("change", otroNegocio);
document.getElementById("posiblesAliadosEjemplo").addEventListener("change", ejemploOtroNegocio);
document.getElementById("partePremia").addEventListener("change", serPartePremia);
document.getElementById("motivarPremiaActivo").addEventListener("change", motivarSerPremiaActivo);
document.getElementById("faltaPremia").addEventListener("change", faltaPremia);
document.getElementById("beneficiosPremia").addEventListener("change", beneficiosSpinPremia);