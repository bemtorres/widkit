// Controlador para Cronómetro Ascendente

// Generar URL del cronómetro
function generateCronometroURL() {
    const title = encodeURIComponent(document.getElementById('c-title').value);
    const year = document.getElementById('c-year').value;
    const month = document.getElementById('c-month').value;
    const day = document.getElementById('c-day').value;
    const hour = document.getElementById('c-hour').value;
    const color1 = document.getElementById('c-color1').value;
    const color2 = document.getElementById('c-color2').value;
    const color3 = document.getElementById('c-color3').value;
    const bgColor = document.getElementById('c-bgcolor')?.value || '#ffffff';
    const font = document.getElementById('c-font')?.value || 'system';
    const minimal = document.getElementById('c-minimal')?.checked ? '1' : '0';
    const showCard = document.getElementById('c-showcard')?.checked ? '1' : '0';
    const showCards = document.getElementById('c-showcards')?.checked ? '1' : '0';
    
    document.getElementById('c-color1-hex').textContent = color1.toUpperCase();
    document.getElementById('c-color2-hex').textContent = color2.toUpperCase();
    document.getElementById('c-color3-hex').textContent = color3.toUpperCase();
    
    const url = `../app/cronometro.html?title=${title}&y=${year}&m=${month}&d=${day}&h=${hour}&min=0&c1=${encodeURIComponent(color1)}&c2=${encodeURIComponent(color2)}&c3=${encodeURIComponent(color3)}&bg=${encodeURIComponent(bgColor)}&font=${font}&minimal=${minimal}&showCard=${showCard}&showCards=${showCards}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/cronometro.html', '');
    const fullURL = baseURL + url.replace('../', '');
    
    // Ajustar altura según el modo
    const iframeHeight = minimal === '1' ? '250' : '450';
    const embedCode = `<iframe src="${fullURL}" width="100%" height="${iframeHeight}" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('c-url').value = fullURL;
    document.getElementById('c-embed').value = embedCode;
    document.getElementById('preview-cronometro').src = url;
}

// Abrir cronómetro en nueva pestaña
function openCronometro() {
    window.open(document.getElementById('c-url').value, '_blank');
}

