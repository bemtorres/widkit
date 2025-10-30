// Variables globales
let flashcards = [];
let previewIndex = 0;
let isPreviewFlipped = false;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Agregar la primera tarjeta por defecto
    addFlashcard();
    // Prellenar con un ejemplo para que se generen los enlaces y el embed
    if (flashcards.length > 0) {
        flashcards[0] = {
            question: '¿Cuál es la capital de Chile?',
            answer: 'Santiago'
        };
        renderFlashcards();
    }
    // Inicializar colores por defecto y listeners
    initColorPickers();
    updatePreview();
    generateCode();
});

// Función para agregar una nueva tarjeta
function addFlashcard() {
    const container = document.getElementById('flashcards-container');
    const index = flashcards.length;
    
    const flashcardDiv = document.createElement('div');
    flashcardDiv.className = 'flashcard-item bg-slate-50 rounded-lg p-4 border border-slate-200';
    flashcardDiv.innerHTML = `
        <div class="flex items-center justify-between mb-3">
            <h5 class="font-semibold text-slate-800">Tarjeta ${index + 1}</h5>
            <button onclick="removeFlashcard(${index})" 
                    class="text-red-500 hover:text-red-700 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        </div>
        <div class="grid grid-cols-1 gap-3">
            <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Pregunta</label>
                <input type="text" 
                       class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                       placeholder="Escribe la pregunta aquí..."
                       oninput="updateFlashcard(${index}, 'question', this.value)"
                       value="${flashcards[index]?.question || ''}">
            </div>
            <div>
                <label class="block text-xs font-medium text-slate-600 mb-1">Respuesta</label>
                <input type="text" 
                       class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                       placeholder="Escribe la respuesta aquí..."
                       oninput="updateFlashcard(${index}, 'answer', this.value)"
                       value="${flashcards[index]?.answer || ''}">
            </div>
        </div>
    `;
    
    container.appendChild(flashcardDiv);
    
    // Agregar al array si no existe
    if (!flashcards[index]) {
        flashcards.push({ question: '', answer: '' });
    }
}

// Función para actualizar una tarjeta
function updateFlashcard(index, field, value) {
    if (!flashcards[index]) {
        flashcards[index] = { question: '', answer: '' };
    }
    flashcards[index][field] = value;
    updatePreview();
    generateCode();
}

// Función para eliminar una tarjeta
function removeFlashcard(index) {
    if (flashcards.length <= 1) {
        alert('Debe haber al menos una tarjeta');
        return;
    }
    
    flashcards.splice(index, 1);
    renderFlashcards();
    updatePreview();
    generateCode();
}

// Función para renderizar todas las tarjetas
function renderFlashcards() {
    const container = document.getElementById('flashcards-container');
    container.innerHTML = '';
    
    flashcards.forEach((flashcard, index) => {
        const flashcardDiv = document.createElement('div');
        flashcardDiv.className = 'flashcard-item bg-slate-50 rounded-lg p-4 border border-slate-200';
        flashcardDiv.innerHTML = `
            <div class="flex items-center justify-between mb-3">
                <h5 class="font-semibold text-slate-800">Tarjeta ${index + 1}</h5>
                <button onclick="removeFlashcard(${index})" 
                        class="text-red-500 hover:text-red-700 transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
            <div class="grid grid-cols-1 gap-3">
                <div>
                    <label class="block text-xs font-medium text-slate-600 mb-1">Pregunta</label>
                    <input type="text" 
                           class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                           placeholder="Escribe la pregunta aquí..."
                           oninput="updateFlashcard(${index}, 'question', this.value)"
                           value="${flashcard.question}">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-600 mb-1">Respuesta</label>
                    <input type="text" 
                           class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                           placeholder="Escribe la respuesta aquí..."
                           oninput="updateFlashcard(${index}, 'answer', this.value)"
                           value="${flashcard.answer}">
                </div>
            </div>
        `;
        container.appendChild(flashcardDiv);
    });
}

// Función para actualizar la vista previa
function updatePreview() {
    const title = document.getElementById('flashcard-title').value;
    const description = document.getElementById('flashcard-description').value;
    
    document.getElementById('preview-title').textContent = title || 'Sin título';
    document.getElementById('preview-description').textContent = description || '';
    
    if (flashcards.length > 0 && flashcards[previewIndex]) {
        document.getElementById('preview-question').textContent = flashcards[previewIndex].question || 'Pregunta vacía';
        document.getElementById('preview-answer').textContent = flashcards[previewIndex].answer || 'Respuesta vacía';
    }
    
    // Actualizar contador
    document.getElementById('preview-counter').textContent = `${previewIndex + 1} de ${flashcards.length}`;
    
    // Resetear estado de volteo
    isPreviewFlipped = false;
    document.getElementById('preview-card').classList.remove('flipped');

    // Aplicar colores seleccionados a la vista previa
    applySelectedColors();
}

// Función para voltear la tarjeta de vista previa
function flipPreviewCard() {
    const card = document.getElementById('preview-card');
    isPreviewFlipped = !isPreviewFlipped;
    
    if (isPreviewFlipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}

// Función para ir a la tarjeta anterior en vista previa
function previousPreview() {
    if (previewIndex > 0) {
        previewIndex--;
        updatePreview();
    }
}

// Función para ir a la siguiente tarjeta en vista previa
function nextPreview() {
    if (previewIndex < flashcards.length - 1) {
        previewIndex++;
        updatePreview();
    }
}

// Función para generar el código
function generateCode() {
    const title = document.getElementById('flashcard-title').value;
    const description = document.getElementById('flashcard-description').value;
    
    // Filtrar tarjetas que tengan contenido
    const validFlashcards = flashcards.filter(card => 
        card.question.trim() !== '' && card.answer.trim() !== ''
    );
    
    if (validFlashcards.length === 0) {
        document.getElementById('direct-link').value = '';
        document.getElementById('iframe-code').value = '';
        return;
    }
    
    // Crear parámetros URL
    const questions = validFlashcards.map(card => encodeURIComponent(card.question)).join(',');
    const answers = validFlashcards.map(card => encodeURIComponent(card.answer)).join(',');
    
    const baseUrl = window.location.origin + window.location.pathname.replace('/admin/flashcard.html', '');
    // Colores: enviamos hex sin el # para evitar problemas de encoding
    const colorBg = (document.getElementById('color-bg')?.value || '#f0f9ff').replace('#','');
    const colorFront = (document.getElementById('color-front')?.value || '#06b6d4').replace('#','');
    const colorBack = (document.getElementById('color-back')?.value || '#6366f1').replace('#','');
    const directLink = `${baseUrl}/app/flashcard.html?question=${questions}&answer=${answers}&bg=${colorBg}&front=${colorFront}&back=${colorBack}`;
    
    // Generar código iframe
    const iframeCode = `<iframe src="${directLink}" width="100%" height="600" frameborder="0" allowfullscreen></iframe>`;
    
    document.getElementById('direct-link').value = directLink;
    document.getElementById('iframe-code').value = iframeCode;
}

// Función para copiar al portapapeles
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    element.setSelectionRange(0, 99999); // Para móviles
    
    try {
        document.execCommand('copy');
        
        // Mostrar feedback visual
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '¡Copiado!';
        button.classList.add('bg-green-500');
        button.classList.remove('bg-slate-500');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-500');
            button.classList.add('bg-slate-500');
        }, 2000);
        
    } catch (err) {
        console.error('Error al copiar: ', err);
        alert('No se pudo copiar automáticamente. Por favor, selecciona y copia manualmente.');
    }
}

// Event listeners para actualizar en tiempo real
document.getElementById('flashcard-title').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

document.getElementById('flashcard-description').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

// ------------------ Colores ------------------
function initColorPickers() {
    const bg = document.getElementById('color-bg');
    const front = document.getElementById('color-front');
    const back = document.getElementById('color-back');

    if (bg) bg.addEventListener('input', onColorChange);
    if (front) front.addEventListener('input', onColorChange);
    if (back) back.addEventListener('input', onColorChange);

    applySelectedColors();
}

function onColorChange() {
    applySelectedColors();
    generateCode();
}

function applySelectedColors() {
    const bg = document.getElementById('color-bg')?.value || '#f0f9ff';
    const front = document.getElementById('color-front')?.value || '#06b6d4';
    const back = document.getElementById('color-back')?.value || '#6366f1';

    // Fondo del sandbox de vista previa (simula el fondo del widget en app/flashcard.html)
    const sandbox = document.getElementById('preview-sandbox');
    if (sandbox) sandbox.style.background = bg;

    // Tarjeta de vista previa
    const frontEl = document.querySelector('.preview-card-front');
    const backEl = document.querySelector('.preview-card-back');
    if (frontEl) frontEl.style.background = front;
    if (backEl) backEl.style.background = back;
}
