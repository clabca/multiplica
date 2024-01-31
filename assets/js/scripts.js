function colorAleatorio() {
  var colores = [
    "#FFFFFF", // Blanco
    "#F5F5F5", // Blanco humo
    "#F0F8FF", // Azul alice
    "#E6E6FA", // Lavanda
    "#E0FFFF", // Azul claro
    "#DCDCDC", // Gris claro
    "#D3D3D3", // Gris claro
    "#C0C0C0", // Plata
    "#B0E0E6", // Azul polvo
    "#ADD8E6", // Azul claro
    "#A9A9A9", // Gris oscuro
    "#A52A2A", // Marrón
    "#A0A0A0", // Gris oscuro
    "#9ACD32", // Verde amarillo
    "#8FBC8F", // Verde mar
    "#8B008B", // Magenta oscuro
    "#87CEEB", // Azul cielo
    "#808080", // Gris
    "#800000", // Marrón
    "#778899", // Gris claro
    "#708090", // Gris
    "#6B8E23", // Verde oliva
    "#696969", // Gris oscuro
    "#66CDAA", // Verde medio
    "#6495ED", // Azul acero
    "#5F9EA0", // Azul cielo oscuro
    "#556B2F", // Verde oliva oscuro
    "#4B0082", // Índigo
    "#483D8B", // Azul oscuro
    "#4682B4", // Azul acero claro
    "#4169E1", // Azul real
    "#2F4F4F", // Verde marino
    "#228B22", // Verde bosque
    "#20B2AA", // Verde claro
    "#191970", // Azul medianoche
    "#008080", // Verde azulado
    "#006400", // Verde oscuro
    "#008000", // Verde
    "#008B8B", // Cian oscuro
    "#00BFFF", // Azul claro
    "#00CED1", // Cian medio
    "#00FA9A", // Verde mar claro
    "#00FF00", // Verde lima
    "#00FF7F", // Verde primavera
    "#00FFFF", // Cian
    "#4682B4", // Azul acero claro
    "#48D1CC", // Turquesa medio
    "#87CEEB", // Azul cielo claro
    "#87CEFA", // Azul claro
    "#ADD8E6", // Azul claro
    "#B0E0E6", // Azul polvo
    "#B0C4DE", // Azul acero claro
  ];
  var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  return colorAleatorio;
}

function calcular() {
  var numero = parseInt(document.getElementById("numero").value);
  var tablasHTML = "";
  var factorial = 1;

  for (var i = 1; i <= numero; i++) {
    tablasHTML +=
      "<div style='background-color: " +
      colorAleatorio() +
      " ;' class='col-2 mt-3'><h3>Tabla del " +
      i +
      ":</h3>";
    for (var j = 1; j <= 10; j++) {
      tablasHTML += i + " x " + j + " = " + i * j + "<br>";
    }
    tablasHTML += "</div>";
  }

  for (var k = 1; k <= numero; k++) {
    factorial *= k;
  }

  document.getElementById("tablas").innerHTML = tablasHTML;
  document.getElementById("factorial").innerText =
    "El factorial de " + numero + " es: " + factorial;
}
