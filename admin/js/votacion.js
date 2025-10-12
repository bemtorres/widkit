// Controlador para Votación en Vivo

// Generar URL de la votación
function generateVotacionURL() {
    const pregunta = encodeURIComponent(document.getElementById('votacion-pregunta').value);
    const alternativasText = document.getElementById('votacion-alternativas').value;
    const color1 = document.getElementById('votacion-color1').value;
    const color2 = document.getElementById('votacion-color2').value;
    
    // Actualizar hex displays
    document.getElementById('votacion-c1-hex').textContent = color1.toUpperCase();
    document.getElementById('votacion-c2-hex').textContent = color2.toUpperCase();
    
    // Convertir alternativas a lista separada por comas
    const alternativas = alternativasText.split('\n').filter(a => a.trim() !== '');
    const alternativasEncoded = encodeURIComponent(alternativas.join(','));
    
    const url = `../app/votacion.html?question=${pregunta}&alternatives=${alternativasEncoded}&c1=${encodeURIComponent(color1)}&c2=${encodeURIComponent(color2)}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/votacion.html', '');
    const fullURL = baseURL + url.replace('../', '');
    
    const embedCode = `<iframe src="${fullURL}" width="100%" height="800" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('votacion-url').value = fullURL;
    document.getElementById('votacion-embed').value = embedCode;
    document.getElementById('preview-votacion').src = url;
}

// Abrir votación en nueva pestaña
function openVotacion() {
    window.open(document.getElementById('votacion-url').value, '_blank');
}

