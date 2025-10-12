// Funcionalidad compartida para Modal de Código QR
// Utilizado por todas las herramientas de WidKit Admin

/**
 * Muestra un modal con el código QR del URL proporcionado
 * @param {string} urlInputId - ID del input que contiene el URL
 */
function showQRModal(urlInputId) {
    const url = document.getElementById(urlInputId).value;
    
    if (!url) {
        alert('No hay URL para generar el código QR');
        return;
    }

    // Crear modal si no existe
    let modal = document.getElementById('qr-modal');
    if (!modal) {
        modal = createQRModal();
        document.body.appendChild(modal);
    }

    // Generar QR Code usando API gratuita de QR Server (tamaño grande para mejor calidad)
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(url)}`;
    
    // Actualizar contenido del modal
    document.getElementById('qr-code-image').src = qrCodeURL;
    document.getElementById('qr-url-display').textContent = url;
    
    // Mostrar modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Animación de entrada
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('scale-100');
        modal.querySelector('.modal-content').classList.remove('scale-95');
    }, 10);
}

/**
 * Crea el HTML del modal de código QR
 * @returns {HTMLElement} - Elemento del modal
 */
function createQRModal() {
    const modalHTML = `
        <div id="qr-modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center p-4" onclick="closeQRModal(event)">
            <div class="modal-content bg-white rounded-2xl p-0 max-w-5xl w-full transform transition-all duration-200 scale-95 overflow-hidden" onclick="event.stopPropagation()">
                <!-- Header -->
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 flex justify-between items-center">
                    <h3 class="text-2xl font-bold text-white">📱 Código QR para Compartir</h3>
                    <button onclick="closeQRModal()" class="text-white hover:text-slate-200 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <!-- Lado Izquierdo: QR Code -->
                    <div class="bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex flex-col items-center justify-center border-r border-slate-200">
                        <div class="bg-white p-6 rounded-2xl shadow-xl border-2 border-slate-200 mb-4">
                            <img id="qr-code-image" src="" alt="Código QR" class="w-80 h-80 object-contain">
                        </div>
                        <p class="text-sm text-slate-600 text-center font-medium">
                            Escanea con tu móvil
                        </p>
                    </div>

                    <!-- Lado Derecho: Información y Acciones -->
                    <div class="p-8 flex flex-col justify-between">
                        <div class="space-y-6">
                            <!-- URL Display -->
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                    </svg>
                                    URL del Widget
                                </label>
                                <div class="bg-slate-900 rounded-lg p-4 relative">
                                    <p id="qr-url-display" class="text-sm text-green-400 break-all font-mono leading-relaxed"></p>
                                    <button onclick="copyURLFromModal()" class="absolute top-2 right-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold rounded transition">
                                        📋 Copiar
                                    </button>
                                </div>
                            </div>

                            <!-- Info -->
                            <div class="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                                <div class="flex gap-3">
                                    <div class="text-2xl">💡</div>
                                    <div>
                                        <p class="text-sm font-semibold text-blue-900 mb-1">¿Cómo usar este QR?</p>
                                        <ul class="text-xs text-blue-800 space-y-1">
                                            <li>• Descarga el QR como imagen PNG</li>
                                            <li>• Compártelo en tu presentación o material</li>
                                            <li>• Los estudiantes escanean y acceden al instante</li>
                                            <li>• Funciona en cualquier dispositivo móvil</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Statistics -->
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                                    <div class="text-2xl mb-1">📱</div>
                                    <p class="text-xs text-green-600 font-medium">100% Móvil</p>
                                    <p class="text-xs text-green-700">Compatible con todos los móviles</p>
                                </div>
                                <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                                    <div class="text-2xl mb-1">⚡</div>
                                    <p class="text-xs text-purple-600 font-medium">Instantáneo</p>
                                    <p class="text-xs text-purple-700">Acceso en 1 segundo</p>
                                </div>
                            </div>
                        </div>

                        <!-- Actions -->
                        <div class="space-y-3 mt-6">
                            <button onclick="downloadQRCode()" class="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition flex items-center justify-center gap-3 shadow-lg hover:shadow-xl">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                </svg>
                                <span>Descargar Código QR</span>
                            </button>
                            <button onclick="closeQRModal()" class="w-full px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const temp = document.createElement('div');
    temp.innerHTML = modalHTML.trim();
    return temp.firstChild;
}

/**
 * Cierra el modal de código QR
 * @param {Event} event - Evento opcional del click
 */
function closeQRModal(event) {
    const modal = document.getElementById('qr-modal');
    if (!modal) return;

    // Si se hizo click en el backdrop (no en el contenido)
    if (!event || event.target.id === 'qr-modal') {
        // Animación de salida
        modal.querySelector('.modal-content').classList.remove('scale-100');
        modal.querySelector('.modal-content').classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 200);
    }
}

/**
 * Descarga el código QR como imagen
 */
function downloadQRCode() {
    const qrImage = document.getElementById('qr-code-image');
    const url = qrImage.src;
    
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = url;
    link.download = 'widkit-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Feedback visual
    const button = event.target.closest('button');
    const originalHTML = button.innerHTML;
    button.innerHTML = `
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
        <span>¡Descargado Exitosamente!</span>
    `;
    button.classList.remove('from-blue-600', 'to-purple-600');
    button.classList.add('from-green-600', 'to-emerald-600');
    
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('from-green-600', 'to-emerald-600');
        button.classList.add('from-blue-600', 'to-purple-600');
    }, 2000);
}

/**
 * Copia el URL desde el modal
 */
function copyURLFromModal() {
    const urlText = document.getElementById('qr-url-display').textContent;
    navigator.clipboard.writeText(urlText).then(() => {
        const button = event.target.closest('button');
        const originalHTML = button.innerHTML;
        button.innerHTML = '✓ Copiado';
        button.classList.remove('bg-slate-700');
        button.classList.add('bg-green-600');
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.classList.remove('bg-green-600');
            button.classList.add('bg-slate-700');
        }, 2000);
    });
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeQRModal();
    }
});

