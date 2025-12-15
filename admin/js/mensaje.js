// Controlador para Editor de Mensajes

// Generar URL del mensaje
function generateMensajeURL() {
    const content = document.getElementById('mensaje-content').value;
    const font = document.getElementById('mensaje-font').value;
    const bgColor = document.getElementById('mensaje-bg-color').value;
    const bgImage = document.getElementById('mensaje-bg-image').value.trim();
    const textColor = document.getElementById('mensaje-text-color').value;
    const flowMode = document.getElementById('mensaje-flow-mode').checked;
    const animation = document.getElementById('mensaje-animation').value;
    const animationSpeed = document.getElementById('mensaje-animation-speed').value;
    
    // Actualizar hex labels
    document.getElementById('mensaje-bg-color-hex').value = bgColor.toUpperCase();
    document.getElementById('mensaje-text-color-hex').value = textColor.toUpperCase();
    
    // Codificar contenido markdown en base64 para evitar problemas con caracteres especiales
    const encodedContent = btoa(unescape(encodeURIComponent(content)));
    
    let url = `../app/mensaje.html?content=${encodeURIComponent(encodedContent)}`;
    url += `&font=${encodeURIComponent(font)}`;
    url += `&bg=${encodeURIComponent(bgColor)}`;
    url += `&text=${encodeURIComponent(textColor)}`;
    
    if (bgImage) {
        url += `&bgImage=${encodeURIComponent(bgImage)}`;
    }
    
    if (flowMode) {
        url += `&flow=1`;
        url += `&anim=${encodeURIComponent(animation)}`;
        url += `&speed=${encodeURIComponent(animationSpeed)}`;
    }
    
    const baseURL = window.location.origin + window.location.pathname.replace('admin/mensaje.html', '');
    const fullURL = baseURL + url.replace('../', '');
    const embedCode = `<iframe src="${fullURL}" width="100%" height="800" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('mensaje-url').value = fullURL;
    document.getElementById('mensaje-embed').value = embedCode;
    document.getElementById('preview-mensaje').src = url;
}

// Abrir mensaje en nueva pestaña
function openMensaje() {
    window.open(document.getElementById('mensaje-url').value, '_blank');
}

