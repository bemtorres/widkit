// Variables globales
let words = [];
let currentPreviewIndex = 0;

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Agregar palabras de ejemplo
    addExampleWords();
    updatePreview();
    generateCode();
});

// Función para agregar palabras de ejemplo
function addExampleWords() {
    const exampleWords = [
        'perro', 'chancho', 'caballa', 'serpiente', 'elefante', 
        'tigre', 'ballena', 'águila', 'león', 'jirafa'
    ];
    
    words = exampleWords.map(word => ({ text: word, category: 'Animales' }));
    renderWords();
}

// Función para agregar una palabra
function addWord() {
    const input = document.getElementById('word-input');
    const wordText = input.value.trim();
    
    if (wordText === '') {
        alert('Por favor, escribe una palabra');
        return;
    }
    
    const category = document.getElementById('game-category').value || 'General';
    words.push({ text: wordText, category: category });
    
    input.value = '';
    renderWords();
    updatePreview();
    generateCode();
}

// Función para manejar la entrada de palabras con Enter
function handleWordInput(event) {
    if (event.key === 'Enter') {
        addWord();
    }
}

// Función para renderizar la lista de palabras
function renderWords() {
    const container = document.getElementById('words-container');
    container.innerHTML = '';
    
    words.forEach((word, index) => {
        const div = document.createElement('div');
        div.className = 'word-item bg-slate-50 rounded-lg p-3 border border-slate-200 flex items-center justify-between';
        div.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-sm font-medium text-slate-600">${index + 1}.</span>
                <span class="font-semibold text-slate-800">${word.text}</span>
                <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">${word.category}</span>
            </div>
            <button onclick="removeWord(${index})" 
                    class="text-red-500 hover:text-red-700 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        `;
        container.appendChild(div);
    });
}

// Función para eliminar una palabra
function removeWord(index) {
    words.splice(index, 1);
    renderWords();
    updatePreview();
    generateCode();
}

// Función para limpiar todas las palabras
function clearWords() {
    if (words.length === 0) {
        alert('No hay palabras para limpiar');
        return;
    }
    
    if (confirm('¿Estás seguro de que quieres eliminar todas las palabras?')) {
        words = [];
        renderWords();
        updatePreview();
        generateCode();
    }
}

// Función para actualizar la vista previa
function updatePreview() {
    const title = document.getElementById('game-title').value;
    const category = document.getElementById('game-category').value;
    const time = document.getElementById('word-time').value;
    
    document.getElementById('preview-title').textContent = title || 'Juego de Palabras';
    document.getElementById('preview-category').textContent = category || 'General';
    document.getElementById('preview-category-display').textContent = category || 'General';
    document.getElementById('preview-time').textContent = time || '5';
    document.getElementById('preview-count').textContent = words.length;
    
    // Mostrar palabra aleatoria en la vista previa
    if (words.length > 0) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        document.getElementById('preview-word').textContent = randomWord.text;
    } else {
        document.getElementById('preview-word').textContent = 'Agrega palabras...';
    }
}

// Función para generar el código
function generateCode() {
    const title = document.getElementById('game-title').value;
    const category = document.getElementById('game-category').value;
    const time = document.getElementById('word-time').value;
    const maxParticipants = document.getElementById('max-participants').value;
    
    if (words.length === 0) {
        document.getElementById('direct-link').value = '';
        document.getElementById('iframe-code').value = '';
        return;
    }
    
    // Crear parámetros URL
    const wordList = words.map(word => encodeURIComponent(word.text)).join(',');
    const params = new URLSearchParams({
        list: wordList,
        category: category || 'General',
        time: time || '5',
        maxParticipants: maxParticipants || '10'
    });
    
    const baseUrl = window.location.origin + window.location.pathname.replace('/admin/palabras.html', '');
    const directLink = `${baseUrl}/app/palabras.html?${params.toString()}`;
    
    // Generar código iframe
    const iframeCode = `<iframe src="${directLink}" width="100%" height="700" frameborder="0" allowfullscreen></iframe>`;
    
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

// Función para importar palabras desde texto
function importWords() {
    const text = prompt('Pega las palabras separadas por comas:');
    if (text) {
        const wordList = text.split(',').map(word => word.trim()).filter(word => word.length > 0);
        const category = document.getElementById('game-category').value || 'General';
        
        words = wordList.map(word => ({ text: word, category: category }));
        renderWords();
        updatePreview();
        generateCode();
    }
}

// Función para exportar palabras
function exportWords() {
    const wordList = words.map(word => word.text).join(', ');
    const textArea = document.createElement('textarea');
    textArea.value = wordList;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    alert('Lista de palabras copiada al portapapeles');
}

// Event listeners para actualizar en tiempo real
document.getElementById('game-title').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

document.getElementById('game-category').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

document.getElementById('word-time').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

document.getElementById('max-participants').addEventListener('input', function() {
    generateCode();
});

// Función para rotar la vista previa
function rotatePreview() {
    if (words.length > 0) {
        currentPreviewIndex = (currentPreviewIndex + 1) % words.length;
        const word = words[currentPreviewIndex];
        document.getElementById('preview-word').textContent = word.text;
        document.getElementById('preview-category-display').textContent = word.category;
    }
}

// Rotar vista previa cada 3 segundos
setInterval(rotatePreview, 3000);
