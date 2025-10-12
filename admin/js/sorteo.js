// Controlador para Sorteo Interactivo

// Generar URL del sorteo
function generateSorteoURL() {
    const title = encodeURIComponent(document.getElementById('sorteo-title').value);
    const subtitle = encodeURIComponent(document.getElementById('sorteo-subtitle').value);
    const participantes = document.getElementById('sorteo-participantes').value;
    const list = participantes.split('\n').map(n => n.trim()).filter(n => n).join(',');
    const time = document.getElementById('sorteo-time').value;
    const winners = document.getElementById('sorteo-winners').value;
    const style = document.querySelector('input[name="sorteo-style"]:checked').value;
    const c1 = document.getElementById('sorteo-color1').value;
    const c2 = document.getElementById('sorteo-color2').value;
    const c3 = document.getElementById('sorteo-color3').value;
    
    // Actualizar hex labels
    document.getElementById('sorteo-c1-hex').textContent = c1.toUpperCase();
    document.getElementById('sorteo-c2-hex').textContent = c2.toUpperCase();
    document.getElementById('sorteo-c3-hex').textContent = c3.toUpperCase();
    
    const url = `../app/sorteo.html?title=${title}&subtitle=${subtitle}&list=${encodeURIComponent(list)}&time=${time}&win=${winners}&style=${style}&c1=${encodeURIComponent(c1)}&c2=${encodeURIComponent(c2)}&c3=${encodeURIComponent(c3)}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/sorteo.html', '');
    const fullURL = baseURL + url.replace('../', '');
    const embedCode = `<iframe src="${fullURL}" width="100%" height="700" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('sorteo-url').value = fullURL;
    document.getElementById('sorteo-embed').value = embedCode;
    document.getElementById('preview-sorteo').src = url;
}

// Abrir sorteo en nueva pestaña
function openSorteo() {
    window.open(document.getElementById('sorteo-url').value, '_blank');
}

