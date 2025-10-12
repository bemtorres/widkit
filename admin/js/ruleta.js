// Controlador para Selector de Estudiante (Ruleta)

// Generar URL del selector
function generateRuletaURL() {
    const title = encodeURIComponent(document.getElementById('ruleta-title').value);
    const subtitle = encodeURIComponent(document.getElementById('ruleta-subtitle').value);
    const participantes = document.getElementById('ruleta-participantes').value;
    const list = participantes.split('\n').map(n => n.trim()).filter(n => n).join(',');
    const remove = document.getElementById('ruleta-remove').checked ? '1' : '0';
    const c1 = document.getElementById('ruleta-color1').value;
    const c2 = document.getElementById('ruleta-color2').value;
    const c3 = document.getElementById('ruleta-color3').value;
    
    // Actualizar hex labels
    document.getElementById('ruleta-c1-hex').textContent = c1.toUpperCase();
    document.getElementById('ruleta-c2-hex').textContent = c2.toUpperCase();
    document.getElementById('ruleta-c3-hex').textContent = c3.toUpperCase();
    
    const url = `../app/ruleta.html?title=${title}&subtitle=${subtitle}&list=${encodeURIComponent(list)}&remove=${remove}&c1=${encodeURIComponent(c1)}&c2=${encodeURIComponent(c2)}&c3=${encodeURIComponent(c3)}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/ruleta.html', '');
    const fullURL = baseURL + url.replace('../', '');
    const embedCode = `<iframe src="${fullURL}" width="100%" height="700" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('ruleta-url').value = fullURL;
    document.getElementById('ruleta-embed').value = embedCode;
    document.getElementById('preview-ruleta').src = url;
}

// Abrir ruleta en nueva pestaña
function openRuleta() {
    window.open(document.getElementById('ruleta-url').value, '_blank');
}

