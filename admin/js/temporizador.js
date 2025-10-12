// Controlador para Cuenta Regresiva

// Generar URL del temporizador
function generateTemporizadorURL() {
    const title = encodeURIComponent(document.getElementById('t-title').value);
    const message = encodeURIComponent(document.getElementById('t-message').value);
    const year = document.getElementById('t-year').value;
    const month = document.getElementById('t-month').value;
    const day = document.getElementById('t-day').value;
    const hour = document.getElementById('t-hour').value;
    const color1 = document.getElementById('t-color1').value;
    const color2 = document.getElementById('t-color2').value;
    const color3 = document.getElementById('t-color3').value;
    const bgColor = document.getElementById('t-bgcolor')?.value || '#ffffff';
    const font = document.getElementById('t-font')?.value || 'system';
    const minimal = document.getElementById('t-minimal')?.checked ? '1' : '0';
    const showCard = document.getElementById('t-showcard')?.checked ? '1' : '0';
    const showCards = document.getElementById('t-showcards')?.checked ? '1' : '0';
    
    document.getElementById('t-color1-hex').textContent = color1.toUpperCase();
    document.getElementById('t-color2-hex').textContent = color2.toUpperCase();
    document.getElementById('t-color3-hex').textContent = color3.toUpperCase();
    
    const url = `../app/cuentaregresiva.html?title=${title}&message=${message}&y=${year}&m=${month}&d=${day}&h=${hour}&min=0&c1=${encodeURIComponent(color1)}&c2=${encodeURIComponent(color2)}&c3=${encodeURIComponent(color3)}&bg=${encodeURIComponent(bgColor)}&font=${font}&minimal=${minimal}&showCard=${showCard}&showCards=${showCards}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/temporizador.html', '');
    const fullURL = baseURL + url.replace('../', '');
    
    // Ajustar altura según el modo
    const iframeHeight = minimal === '1' ? '250' : '450';
    const embedCode = `<iframe src="${fullURL}" width="100%" height="${iframeHeight}" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('t-url').value = fullURL;
    document.getElementById('t-embed').value = embedCode;
    document.getElementById('preview-temporizador').src = url;
}

// Abrir temporizador en nueva pestaña
function openTemporizador() {
    window.open(document.getElementById('t-url').value, '_blank');
}

