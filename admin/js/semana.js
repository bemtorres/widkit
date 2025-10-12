// Controlador para Calculador de Semanas

// Estado de las semanas
let weeks = {};
let weekCounter = 0;

// Generar URL del calculador de semanas
function generateSemanaURL() {
    const year = document.getElementById('s-year').value;
    const month = document.getElementById('s-month').value;
    const day = document.getElementById('s-day').value;
    const color1 = document.getElementById('s-color1').value;
    const color2 = document.getElementById('s-color2').value;
    const color3 = document.getElementById('s-color3').value;
    const bgColor = document.getElementById('s-bgcolor')?.value || '#ffffff';
    const font = document.getElementById('s-font')?.value || 'system';
    
    document.getElementById('s-color1-hex').textContent = color1.toUpperCase();
    document.getElementById('s-color2-hex').textContent = color2.toUpperCase();
    document.getElementById('s-color3-hex').textContent = color3.toUpperCase();
    
    const activities = {};
    Object.keys(weeks).forEach(weekNum => {
        const textarea = document.getElementById(`week-${weekNum}-activities`);
        if (textarea && textarea.value.trim()) {
            activities[weekNum] = textarea.value.trim().split('\n').filter(a => a.trim());
        }
    });
    
    const activitiesJSON = encodeURIComponent(JSON.stringify(activities));
    const url = `../app/semana.html?y=${year}&m=${month}&d=${day}&activities=${activitiesJSON}&c1=${encodeURIComponent(color1)}&c2=${encodeURIComponent(color2)}&c3=${encodeURIComponent(color3)}&bg=${encodeURIComponent(bgColor)}&font=${font}`;
    const baseURL = window.location.origin + window.location.pathname.replace('admin/semana.html', '');
    const fullURL = baseURL + url.replace('../', '');
    const embedCode = `<iframe src="${fullURL}" width="100%" height="650" frameborder="0" style="border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></iframe>`;
    
    document.getElementById('s-url').value = fullURL;
    document.getElementById('s-embed').value = embedCode;
    document.getElementById('preview-semana').src = url;
}

// Agregar semana
function addWeek(defaultText = '') {
    weekCounter++;
    const weekNum = weekCounter;
    weeks[weekNum] = true;
    
    const container = document.getElementById('weeks-container');
    const weekDiv = document.createElement('div');
    weekDiv.id = `week-${weekNum}`;
    weekDiv.className = 'bg-slate-50 border border-slate-200 rounded-lg p-4';
    weekDiv.innerHTML = `
        <div class="flex justify-between items-center mb-2">
            <h4 class="text-sm font-semibold text-slate-900">Semana ${weekNum}</h4>
            <button onclick="removeWeek(${weekNum})" class="text-slate-400 hover:text-red-600 transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <textarea id="week-${weekNum}-activities" 
                  class="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  rows="3" 
                  placeholder="Una actividad por línea..."
                  onchange="generateSemanaURL()">${defaultText}</textarea>
    `;
    container.appendChild(weekDiv);
    generateSemanaURL();
}

// Eliminar semana
function removeWeek(weekNum) {
    delete weeks[weekNum];
    document.getElementById(`week-${weekNum}`).remove();
    generateSemanaURL();
}

// Abrir semana en nueva pestaña
function openSemana() {
    window.open(document.getElementById('s-url').value, '_blank');
}

