// Controlador para Calculadora de Notas

// Generar URL de la calculadora
function generateNotasURL() {
    const title = encodeURIComponent(document.getElementById('notas-title').value);
    const subtitle = encodeURIComponent(document.getElementById('notas-subtitle').value);
    const percentages = document.getElementById('notas-percentages').value.trim();
    const names = document.getElementById('notas-names').value.trim();
    const min = document.getElementById('notas-min').value;
    const max = document.getElementById('notas-max').value;
    const c1 = document.getElementById('notas-color1').value;
    const c2 = document.getElementById('notas-color2').value;
    const c3 = document.getElementById('notas-color3').value;
    
    // Actualizar hex labels
    document.getElementById('notas-c1-hex').textContent = c1.toUpperCase();
    document.getElementById('notas-c2-hex').textContent = c2.toUpperCase();
    document.getElementById('notas-c3-hex').textContent = c3.toUpperCase();
    
    let url = `../app/notas.html?title=${title}&subtitle=${subtitle}`;
    
    if (percentages) {
        url += `&porcentaje=${encodeURIComponent(percentages)}`;
    }
    
    if (names) {
        url += `&nombres=${encodeURIComponent(names)}`;
    }
    
    url += `&min=${min}&max=${max}`;
    url += `&c1=${encodeURIComponent(c1)}&c2=${encodeURIComponent(c2)}&c3=${encodeURIComponent(c3)}`;
    
    const baseURL = window.location.origin + window.location.pathname.replace('admin/notas.html', '');
    const fullURL = baseURL + url.replace('../', '');
    const embedCode = `<iframe src="${fullURL}" width="100%" height="800" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('notas-url').value = fullURL;
    document.getElementById('notas-embed').value = embedCode;
    document.getElementById('preview-notas').src = url;
}

// Abrir calculadora en nueva pestaña
function openNotas() {
    window.open(document.getElementById('notas-url').value, '_blank');
}

