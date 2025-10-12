// Controlador para Generador de QR

// Generar URL del QR
function generateQRURL() {
    const type = document.getElementById('qr-type').value;
    let code = '';
    
    // Generar el código según el tipo
    if (type === 'url' || type === 'text') {
        code = document.getElementById('qr-code').value;
    } else if (type === 'email') {
        const email = document.getElementById('qr-email').value;
        code = email ? `mailto:${email}` : '';
    } else if (type === 'phone') {
        const phone = document.getElementById('qr-phone').value;
        code = phone ? `tel:${phone}` : '';
    } else if (type === 'sms') {
        const number = document.getElementById('qr-sms-number').value;
        const text = document.getElementById('qr-sms-text').value;
        code = number ? `sms:${number}${text ? `?body=${encodeURIComponent(text)}` : ''}` : '';
    } else if (type === 'wifi') {
        const ssid = document.getElementById('qr-wifi-ssid').value;
        const password = document.getElementById('qr-wifi-password').value;
        const security = document.getElementById('qr-wifi-security').value;
        if (ssid) {
            code = `WIFI:T:${security};S:${ssid};P:${password};;`;
        }
    }
    
    const title = encodeURIComponent(document.getElementById('qr-title').value);
    const subtitle = encodeURIComponent(document.getElementById('qr-subtitle').value);
    const size = document.getElementById('qr-size').value;
    const bgColor = document.getElementById('qr-bgcolor').value;
    const qrBg = document.getElementById('qr-qrbg').value;
    const qrColor = document.getElementById('qr-qrcolor').value;
    const minimal = document.getElementById('qr-minimal')?.checked ? '1' : '0';
    
    const url = `../app/qr.html?code=${encodeURIComponent(code)}&size=${size}&bg=${encodeURIComponent(bgColor)}&qrbg=${encodeURIComponent(qrBg)}&qrcolor=${encodeURIComponent(qrColor)}&title=${title}&subtitle=${subtitle}&minimal=${minimal}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/qr.html', '');
    const fullURL = baseURL + url.replace('../', '');
    
    // Ajustar altura del iframe según el modo
    const iframeHeight = minimal === '1' ? '300' : '600';
    const embedCode = `<iframe src="${fullURL}" width="100%" height="${iframeHeight}" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('qr-url').value = fullURL;
    document.getElementById('qr-embed').value = embedCode;
    document.getElementById('preview-qr').src = url;
}

// Abrir QR en nueva pestaña
function openQR() {
    window.open(document.getElementById('qr-url').value, '_blank');
}

