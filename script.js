let qr;

function gerarQRCode() {
  const link = document.getElementById("link").value.trim();
  const container = document.getElementById("qrcode");

  if (!link) {
    alert("Digite um link válido!");
    return;
  }

  container.innerHTML = "";

  qr = new QRCode(container, {
    text: link,
    width: 180,
    height: 180,
    colorDark: "#003a8f",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Enter também gera

document.getElementById("link").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    gerarQRCode();
  }
});