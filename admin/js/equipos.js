// Controlador para Generador de Equipos

// Generar URL del generador
function generateEquiposURL() {
    const title = encodeURIComponent(document.getElementById('equipos-title').value);
    const subtitle = encodeURIComponent(document.getElementById('equipos-subtitle').value);
    const participantes = document.getElementById('equipos-participantes').value;
    const list = participantes.split('\n').map(n => n.trim()).filter(n => n).join(',');
    const teams = document.getElementById('equipos-teams').value;
    const countdown = document.getElementById('equipos-countdown').value;
    const c1 = document.getElementById('equipos-color1').value;
    const c2 = document.getElementById('equipos-color2').value;
    const c3 = document.getElementById('equipos-color3').value;
    
    // Actualizar hex labels
    document.getElementById('equipos-c1-hex').textContent = c1.toUpperCase();
    document.getElementById('equipos-c2-hex').textContent = c2.toUpperCase();
    document.getElementById('equipos-c3-hex').textContent = c3.toUpperCase();
    
    const url = `../app/equipos.html?title=${title}&subtitle=${subtitle}&list=${encodeURIComponent(list)}&equipos=${teams}&countdown=${countdown}&c1=${encodeURIComponent(c1)}&c2=${encodeURIComponent(c2)}&c3=${encodeURIComponent(c3)}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/equipos.html', '');
    const fullURL = baseURL + url.replace('../', '');
    const embedCode = `<iframe src="${fullURL}" width="100%" height="900" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('equipos-url').value = fullURL;
    document.getElementById('equipos-embed').value = embedCode;
    document.getElementById('preview-equipos').src = url;
}

// Abrir en nueva pestaña
function openEquipos() {
    window.open(document.getElementById('equipos-url').value, '_blank');
}

