// Variables globales
let currentPreviewIndex = 0;
let previewOperations = [];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    updatePreview();
    generateCode();
});

// Función para generar operaciones de vista previa
function generatePreviewOperations() {
    const difficulty = document.getElementById('difficulty').value;
    const operations = getSelectedOperations();
    
    previewOperations = [];
    
    for (let i = 0; i < 5; i++) {
        const operation = generateRandomOperation(operations, difficulty);
        previewOperations.push(operation);
    }
}

// Función para obtener las operaciones seleccionadas
function getSelectedOperations() {
    const operations = [];
    if (document.getElementById('op-suma').checked) operations.push('suma');
    if (document.getElementById('op-resta').checked) operations.push('resta');
    if (document.getElementById('op-multiplicacion').checked) operations.push('multiplicacion');
    if (document.getElementById('op-division').checked) operations.push('division');
    
    return operations.length > 0 ? operations : ['suma', 'resta'];
}

// Función para generar una operación aleatoria
function generateRandomOperation(types, difficulty) {
    const type = types[Math.floor(Math.random() * types.length)];
    let a, b, result, display;
    
    switch (difficulty) {
        case 'easy':
            a = Math.floor(Math.random() * 10) + 1;
            b = Math.floor(Math.random() * 10) + 1;
            break;
        case 'medium':
            a = Math.floor(Math.random() * 50) + 1;
            b = Math.floor(Math.random() * 50) + 1;
            break;
        case 'hard':
            a = Math.floor(Math.random() * 100) + 1;
            b = Math.floor(Math.random() * 100) + 1;
            break;
    }
    
    switch (type) {
        case 'suma':
            result = a + b;
            display = `${a} + ${b} = ?`;
            break;
        case 'resta':
            // Asegurar que el resultado sea positivo
            if (a < b) [a, b] = [b, a];
            result = a - b;
            display = `${a} - ${b} = ?`;
            break;
        case 'multiplicacion':
            a = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 12) + 1;
            result = a * b;
            display = `${a} × ${b} = ?`;
            break;
        case 'division':
            result = Math.floor(Math.random() * 12) + 1;
            b = Math.floor(Math.random() * 12) + 1;
            a = result * b;
            display = `${a} ÷ ${b} = ?`;
            break;
    }
    
    return {
        display: display,
        result: result,
        type: type,
        difficulty: difficulty
    };
}

// Función para actualizar la vista previa
function updatePreview() {
    const title = document.getElementById('game-title').value;
    const difficulty = document.getElementById('difficulty').value;
    const time = document.getElementById('operation-time').value;
    const total = document.getElementById('total-operations').value;
    const operations = getSelectedOperations();
    
    document.getElementById('preview-title').textContent = title || 'Juego de Matemáticas';
    document.getElementById('preview-difficulty').textContent = getDifficultyLabel(difficulty);
    document.getElementById('preview-difficulty-badge').textContent = getDifficultyLabel(difficulty);
    document.getElementById('preview-time').textContent = time || '10';
    document.getElementById('preview-total').textContent = total || '20';
    document.getElementById('preview-ops').textContent = getOperationsLabel(operations);
    
    // Generar operaciones de vista previa
    generatePreviewOperations();
    
    // Mostrar operación aleatoria en la vista previa
    if (previewOperations.length > 0) {
        const randomOperation = previewOperations[Math.floor(Math.random() * previewOperations.length)];
        document.getElementById('preview-operation').textContent = randomOperation.display;
        document.getElementById('preview-operation-type').textContent = getOperationTypeLabel(randomOperation.type);
    } else {
        document.getElementById('preview-operation').textContent = 'Selecciona operaciones...';
        document.getElementById('preview-operation-type').textContent = '';
    }
}

// Función para obtener etiqueta de dificultad
function getDifficultyLabel(difficulty) {
    const labels = {
        'easy': 'Fácil',
        'medium': 'Medio',
        'hard': 'Difícil'
    };
    return labels[difficulty] || 'Fácil';
}

// Función para obtener etiqueta de tipo de operación
function getOperationTypeLabel(type) {
    const labels = {
        'suma': 'Suma',
        'resta': 'Resta',
        'multiplicacion': 'Multiplicación',
        'division': 'División'
    };
    return labels[type] || type;
}

// Función para obtener etiqueta de operaciones
function getOperationsLabel(operations) {
    const labels = {
        'suma': 'Suma',
        'resta': 'Resta',
        'multiplicacion': 'Multiplicación',
        'division': 'División'
    };
    return operations.map(op => labels[op] || op).join(', ');
}

// Función para generar el código
function generateCode() {
    const title = document.getElementById('game-title').value;
    const difficulty = document.getElementById('difficulty').value;
    const operations = getSelectedOperations();
    const time = document.getElementById('operation-time').value;
    const total = document.getElementById('total-operations').value;
    const maxParticipants = document.getElementById('max-participants').value;
    
    if (operations.length === 0) {
        document.getElementById('direct-link').value = '';
        document.getElementById('iframe-code').value = '';
        return;
    }
    
    // Crear parámetros URL
    const params = new URLSearchParams({
        difficulty: difficulty,
        operations: operations.join(','),
        time: time || '10',
        total: total || '20',
        maxParticipants: maxParticipants || '10'
    });
    
    const baseUrl = window.location.origin + window.location.pathname.replace('/admin/matematicas.html', '');
    const directLink = `${baseUrl}/app/matematicas.html?${params.toString()}`;
    
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

// Función para rotar la vista previa
function rotatePreview() {
    if (previewOperations.length > 0) {
        currentPreviewIndex = (currentPreviewIndex + 1) % previewOperations.length;
        const operation = previewOperations[currentPreviewIndex];
        document.getElementById('preview-operation').textContent = operation.display;
        document.getElementById('preview-operation-type').textContent = getOperationTypeLabel(operation.type);
    }
}

// Event listeners para actualizar en tiempo real
document.getElementById('game-title').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

document.getElementById('difficulty').addEventListener('change', function() {
    updatePreview();
    generateCode();
});

document.getElementById('operation-time').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

document.getElementById('total-operations').addEventListener('input', function() {
    updatePreview();
    generateCode();
});

document.getElementById('max-participants').addEventListener('input', function() {
    generateCode();
});

// Event listeners para operaciones
document.getElementById('op-suma').addEventListener('change', function() {
    updatePreview();
    generateCode();
});

document.getElementById('op-resta').addEventListener('change', function() {
    updatePreview();
    generateCode();
});

document.getElementById('op-multiplicacion').addEventListener('change', function() {
    updatePreview();
    generateCode();
});

document.getElementById('op-division').addEventListener('change', function() {
    updatePreview();
    generateCode();
});

// Rotar vista previa cada 4 segundos
setInterval(rotatePreview, 4000);
