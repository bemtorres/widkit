// Sistema de Internacionalización (i18n) para WidKit
// Soporta: Español (es), English (en), Português (pt)

const translations = {
    es: {
        // Navbar
        'nav.title': 'WidKit',
        'nav.subtitle': 'Widgets para Todo',
        'nav.examples': 'Ejemplos',
        'nav.home': 'Inicio',
        'nav.backToHome': '← Volver',
        
        // Hero
        'hero.badge': '✨ Gratis y fácil de usar',
        'hero.badgePro': '🔥 Modo Pro Activado',
        'hero.title': 'Widgets Educativos',
        'hero.subtitle': 'Listos en 30 Segundos',
        'hero.subtitlePro': 'Gratis por siempre y sin publicidad',
        'hero.description': 'Integra cuenta regresiva, calculador de semanas y sorteos en Moodle, Blackboard, Canvas o cualquier sitio web.',
        'hero.descriptionBold': '¡Sin programación!',
        'hero.cta': 'Ver 35+ Ejemplos Listos',
        'hero.quickExample': 'Ejemplo Súper Fácil: Copia y Pega en tu LMS',
        'hero.step1': 'Paso 1:',
        'hero.step1Desc': 'Copia este código y pégalo en Moodle, Blackboard o tu sitio web:',
        'hero.step2': 'Paso 2:',
        'hero.step2Desc': '¡Listo! Ya tienes una cuenta regresiva funcionando.',
        'hero.seeMore': 'Ver más widgets →',
        'hero.compatible': 'Compatible con:',
        'hero.anyWeb': 'Cualquier Web',
        
        // Widgets Section
        'widgets.title': '11 Widgets Listos para Usar',
        'widgets.subtitle': 'Selecciona, configura y obtén el código embebido en segundos',
        
        // Widget Cards
        'widget.countdown.title': 'Cuenta Regresiva',
        'widget.countdown.desc': 'Temporizador para exámenes, entregas y eventos importantes',
        'widget.countdown.feat1': 'Actualización en tiempo real',
        'widget.countdown.feat2': 'Colores personalizables',
        'widget.countdown.feat3': 'Responsive',
        'widget.countdown.configure': 'Configurar',
        'widget.countdown.demo': 'Demo',
        
        'widget.stopwatch.title': 'Cronómetro Ascendente',
        'widget.stopwatch.desc': 'Tiempo transcurrido desde un evento o fecha de inicio',
        'widget.stopwatch.feat1': 'Cuenta hacia adelante',
        'widget.stopwatch.feat2': 'Tiempo de funcionamiento',
        'widget.stopwatch.feat3': 'Personalizable',
        
        'widget.weeks.title': 'Calculador de Semanas',
        'widget.weeks.desc': 'Organiza tu curso por semanas con actividades programadas',
        'widget.weeks.feat1': 'Semana actual destacada',
        'widget.weeks.feat2': 'Actividades por semana',
        'widget.weeks.feat3': 'Ideal para cursos',
        
        'widget.raffle.title': 'Sorteo Interactivo',
        'widget.raffle.desc': 'Sorteos animados para seleccionar ganadores o participaciones',
        'widget.raffle.feat1': 'Animación de ruleta',
        'widget.raffle.feat2': 'Efectos visuales y confetti',
        'widget.raffle.feat3': 'Múltiples ganadores',
        
        'widget.qr.title': 'Generador de QR',
        'widget.qr.desc': 'Crea códigos QR personalizados para URLs, textos y más',
        'widget.qr.feat1': 'URLs, texto, WiFi, email',
        'widget.qr.feat2': 'Colores personalizables',
        'widget.qr.feat3': 'Descarga directa PNG',
        
        'widget.roulette.title': 'Selector de Estudiante',
        'widget.roulette.desc': 'Selección rápida y aleatoria de participantes',
        'widget.roulette.feat1': 'Animación de ruleta rápida',
        'widget.roulette.feat2': 'Elimina ya seleccionados',
        'widget.roulette.feat3': 'Ideal para participaciones',
        
        'widget.grades.title': 'Calculadora de Notas',
        'widget.grades.desc': 'Promedio ponderado y "¿Qué nota necesito?"',
        'widget.grades.feat1': 'Cálculo automático ponderado',
        'widget.grades.feat2': '¿Qué nota necesito para aprobar?',
        'widget.grades.feat3': 'Barras de progreso visuales',
        
        'widget.teams.title': 'Generador de Equipos',
        'widget.teams.desc': 'Divide participantes en equipos balanceados',
        'widget.teams.feat1': 'Asignación aleatoria balanceada',
        'widget.teams.feat2': 'Edición drag & drop en vivo',
        'widget.teams.feat3': 'Exportar lista de equipos',
        
        'widget.pomodoro.title': 'Pomodoro Timer',
        'widget.pomodoro.desc': 'Técnica de productividad con intervalos trabajo-descanso',
        'widget.pomodoro.feat1': 'Timer configurable (25/5 min)',
        'widget.pomodoro.feat2': 'Contador de sesiones completadas',
        'widget.pomodoro.feat3': 'Notificaciones y sonidos',
        
        'widget.leaderboard.title': 'Tabla de Clasificación',
        'widget.leaderboard.desc': 'Ranking de estudiantes, equipos o competencias',
        'widget.leaderboard.feat1': 'Ordenamiento automático',
        'widget.leaderboard.feat2': 'Medallas para top 3',
        'widget.leaderboard.feat3': '3 estilos de visualización',
        
        'widget.voting.title': 'Votación en Vivo',
        'widget.voting.desc': 'Toma decisiones en clase con votación en tiempo real',
        'widget.voting.feat1': 'Botones + / - para contar votos',
        'widget.voting.feat2': 'Muestra ganador con confetti',
        'widget.voting.feat3': 'Ideal para tomar decisiones',
        
        // Integration
        'integration.title': 'Cómo Integrarlo en tu LMS',
        'integration.subtitle': '3 pasos simples para tener widgets funcionando en minutos',
        'integration.step1.title': 'Configura tu Widget',
        'integration.step1.desc': 'Elige el widget que necesitas, personaliza colores, textos y fechas desde nuestra interfaz visual. No se requiere programación.',
        'integration.step2.title': 'Copia el Código',
        'integration.step2.desc': 'Obtén el código iframe generado automáticamente. Es un simple copiar y pegar. También puedes usar el enlace directo.',
        'integration.step3.title': 'Pégalo en tu LMS',
        'integration.step3.desc': 'En Moodle, Blackboard, Canvas o tu web, activa el editor HTML y pega el código. ¡Funciona al instante!',
        
        // Platform Instructions
        'platforms.title': 'Instrucciones Específicas por Plataforma',
        
        // Features
        'features.title': '¿Por Qué Usar WidKit?',
        'features.fast.title': 'Rápido',
        'features.fast.desc': 'Configura en 30 segundos, sin instalaciones',
        'features.custom.title': 'Personalizable',
        'features.custom.desc': 'Colores, textos y estilos a tu gusto',
        'features.nodb.title': 'Sin Base de Datos',
        'features.nodb.desc': 'Todo funciona por URL, sin backend',
        'features.responsive.title': 'Responsive',
        'features.responsive.desc': 'Se adapta a móvil, tablet y desktop',
        
        // Footer
        'footer.subtitle': 'Widgets Educativos Gratuitos',
        'footer.description': 'Aprende a toda velocidad. Widgets educativos sin código y sin límites.',
        'footer.free': '✓ 100% Gratis',
        'footer.noregister': '✓ Sin Registro',
        'footer.opensource': '✓ Open Source',
        'footer.widgets': '✓ 11 Widgets',
        'footer.time': 'Tiempo',
        'footer.class': 'Clase',
        'footer.tools': 'Herramientas',
        'footer.resources': 'Recursos',
        'footer.community': 'Comunidad',
        'footer.copyright': '© 2025 WidKit. Todos los derechos reservados.',
        'footer.terms': 'Términos',
        'footer.privacy': 'Privacidad',
        'footer.developed': 'Desarrollado con ❤️ por',
        
        // Common
        'common.copy': 'Copiar',
        'common.copied': '✓ Copiado',
        'common.close': 'Cerrar',
        'common.configure': 'Configurar',
        'common.demo': 'Demo',
        'common.preview': 'Vista Previa',
        'common.refresh': 'Actualizar',
        'common.openNewTab': 'Abrir en Nueva Pestaña',
        'common.directLink': '🔗 Link Directo',
        'common.embedCode': '📦 Código Embebido (iframe)',
        'common.shareIntegrate': '📤 Compartir e Integrar',
        'common.qrCode': 'QR',
        
        // Platform Instructions
        'platform.title': 'Instrucciones Específicas por Plataforma',
        'platform.moodle.step1': 'Activa el modo edición en tu curso',
        'platform.moodle.step2': 'Añade una "Etiqueta" o "Página"',
        'platform.moodle.step3': 'Haz clic en el botón HTML (</>)',
        'platform.moodle.step4': 'Pega el código iframe',
        'platform.moodle.step5': 'Guarda ¡y listo!',
        'platform.blackboard.step1': 'Ve al área de contenido',
        'platform.blackboard.step2': 'Selecciona "Crear contenido" → "Elemento"',
        'platform.blackboard.step3': 'En el editor, cambia a vista HTML',
        'platform.blackboard.step4': 'Pega el código iframe',
        'platform.blackboard.step5': 'Envía ¡y funciona!',
        'platform.canvas.step1': 'Edita una página o módulo',
        'platform.canvas.step2': 'Haz clic en "Editor HTML" (icono </>)',
        'platform.canvas.step3': 'Pega el código iframe',
        'platform.canvas.step4': 'Guarda cambios',
        'platform.canvas.step5': '¡Listo para usar!',
        'platform.web.step1': 'Edita tu página o entrada',
        'platform.web.step2': 'Agrega un bloque "HTML personalizado"',
        'platform.web.step3': 'Pega el código iframe',
        'platform.web.step4': 'Publica',
        'platform.web.step5': '¡Visible al instante!',
        'platform.web.title': 'Sitio Web / WordPress',
        
        // Pro Mode
        'promode.button': 'Modo Pro',
        'promode.buttonNormal': 'Modo Normal',
    },
    
    en: {
        // Navbar
        'nav.title': 'WidKit',
        'nav.subtitle': 'Widgets for Everything',
        'nav.examples': 'View Examples',
        'nav.home': 'Home',
        'nav.backToHome': '← Back',
        
        // Hero
        'hero.badge': '✨ Free and easy to use',
        'hero.badgePro': '🔥 Pro Mode Activated',
        'hero.title': 'Educational Widgets',
        'hero.subtitle': 'Ready in 30 Seconds',
        'hero.subtitlePro': 'Free forever and ad-free',
        'hero.description': 'Integrate countdown, week calculator and raffles in Moodle, Blackboard, Canvas or any website.',
        'hero.descriptionBold': 'No coding required!',
        'hero.cta': 'View 35+ Ready Examples',
        'hero.quickExample': 'Super Easy Example: Copy and Paste in your LMS',
        'hero.step1': 'Step 1:',
        'hero.step1Desc': 'Copy this code and paste it in Moodle, Blackboard or your website:',
        'hero.step2': 'Step 2:',
        'hero.step2Desc': 'Done! You now have a working countdown.',
        'hero.seeMore': 'See more widgets →',
        'hero.compatible': 'Compatible with:',
        'hero.anyWeb': 'Any Website',
        
        // Widgets Section
        'widgets.title': '11 Widgets Ready to Use',
        'widgets.subtitle': 'Select, configure and get the embed code in seconds',
        
        // Widget Cards
        'widget.countdown.title': 'Countdown Timer',
        'widget.countdown.desc': 'Timer for exams, deadlines and important events',
        'widget.countdown.feat1': 'Real-time updates',
        'widget.countdown.feat2': 'Customizable colors',
        'widget.countdown.feat3': 'Responsive',
        'widget.countdown.configure': 'Configure',
        'widget.countdown.demo': 'Demo',
        
        'widget.stopwatch.title': 'Stopwatch',
        'widget.stopwatch.desc': 'Elapsed time since an event or start date',
        'widget.stopwatch.feat1': 'Counts forward',
        'widget.stopwatch.feat2': 'Uptime tracking',
        'widget.stopwatch.feat3': 'Customizable',
        
        'widget.weeks.title': 'Week Calculator',
        'widget.weeks.desc': 'Organize your course by weeks with scheduled activities',
        'widget.weeks.feat1': 'Current week highlighted',
        'widget.weeks.feat2': 'Activities per week',
        'widget.weeks.feat3': 'Perfect for courses',
        
        'widget.raffle.title': 'Interactive Raffle',
        'widget.raffle.desc': 'Animated raffles to select winners or participants',
        'widget.raffle.feat1': 'Wheel animation',
        'widget.raffle.feat2': 'Visual effects and confetti',
        'widget.raffle.feat3': 'Multiple winners',
        
        'widget.qr.title': 'QR Generator',
        'widget.qr.desc': 'Create custom QR codes for URLs, text and more',
        'widget.qr.feat1': 'URLs, text, WiFi, email',
        'widget.qr.feat2': 'Customizable colors',
        'widget.qr.feat3': 'Direct PNG download',
        
        'widget.roulette.title': 'Student Picker',
        'widget.roulette.desc': 'Quick and random participant selection',
        'widget.roulette.feat1': 'Fast wheel animation',
        'widget.roulette.feat2': 'Remove already selected',
        'widget.roulette.feat3': 'Great for participation',
        
        'widget.grades.title': 'Grade Calculator',
        'widget.grades.desc': 'Weighted average and "What grade do I need?"',
        'widget.grades.feat1': 'Automatic weighted calculation',
        'widget.grades.feat2': 'What grade do I need to pass?',
        'widget.grades.feat3': 'Visual progress bars',
        
        'widget.teams.title': 'Team Generator',
        'widget.teams.desc': 'Divide participants into balanced teams',
        'widget.teams.feat1': 'Balanced random assignment',
        'widget.teams.feat2': 'Live drag & drop editing',
        'widget.teams.feat3': 'Export team list',
        
        'widget.pomodoro.title': 'Pomodoro Timer',
        'widget.pomodoro.desc': 'Productivity technique with work-break intervals',
        'widget.pomodoro.feat1': 'Configurable timer (25/5 min)',
        'widget.pomodoro.feat2': 'Completed sessions counter',
        'widget.pomodoro.feat3': 'Notifications and sounds',
        
        'widget.leaderboard.title': 'Leaderboard',
        'widget.leaderboard.desc': 'Rankings for students, teams or competitions',
        'widget.leaderboard.feat1': 'Automatic sorting',
        'widget.leaderboard.feat2': 'Medals for top 3',
        'widget.leaderboard.feat3': '3 visualization styles',
        
        'widget.voting.title': 'Live Voting',
        'widget.voting.desc': 'Make decisions in class with real-time voting',
        'widget.voting.feat1': '+ / - buttons to count votes',
        'widget.voting.feat2': 'Shows winner with confetti',
        'widget.voting.feat3': 'Ideal for decision making',
        
        // Integration
        'integration.title': 'How to Integrate in Your LMS',
        'integration.subtitle': '3 simple steps to have widgets working in minutes',
        'integration.step1.title': 'Configure Your Widget',
        'integration.step1.desc': 'Choose the widget you need, customize colors, texts and dates from our visual interface. No programming required.',
        'integration.step2.title': 'Copy the Code',
        'integration.step2.desc': 'Get the automatically generated iframe code. It\'s a simple copy and paste. You can also use the direct link.',
        'integration.step3.title': 'Paste in Your LMS',
        'integration.step3.desc': 'In Moodle, Blackboard, Canvas or your website, activate the HTML editor and paste the code. Works instantly!',
        
        // Features
        'features.title': 'Why Use WidKit?',
        'features.fast.title': 'Fast',
        'features.fast.desc': 'Configure in 30 seconds, no installations',
        'features.custom.title': 'Customizable',
        'features.custom.desc': 'Colors, texts and styles to your liking',
        'features.nodb.title': 'No Database',
        'features.nodb.desc': 'Everything works by URL, no backend',
        'features.responsive.title': 'Responsive',
        'features.responsive.desc': 'Adapts to mobile, tablet and desktop',
        
        // Footer
        'footer.subtitle': 'Free Educational Widgets',
        'footer.description': 'Like the wise owl, manage your time and events. Embeddable widgets for education without code, without registration and completely free.',
        'footer.free': '✓ 100% Free',
        'footer.noregister': '✓ No Registration',
        'footer.opensource': '✓ Open Source',
        'footer.widgets': '✓ 11 Widgets',
        'footer.time': 'Time',
        'footer.class': 'Classroom',
        'footer.tools': 'Tools',
        'footer.resources': 'Resources',
        'footer.community': 'Community',
        'footer.copyright': '© 2025 WidKit. All rights reserved.',
        'footer.terms': 'Terms',
        'footer.privacy': 'Privacy',
        'footer.developed': 'Developed with ❤️ by',
        
        // Common
        'common.copy': 'Copy',
        'common.copied': '✓ Copied',
        'common.close': 'Close',
        'common.configure': 'Configure',
        'common.demo': 'Demo',
        'common.preview': 'Preview',
        'common.refresh': 'Refresh',
        'common.openNewTab': 'Open in New Tab',
        'common.directLink': '🔗 Direct Link',
        'common.embedCode': '📦 Embed Code (iframe)',
        'common.shareIntegrate': '📤 Share & Integrate',
        'common.qrCode': 'QR',
    },
    
    pt: {
        // Navbar
        'nav.title': 'WidKit',
        'nav.subtitle': 'Widgets para Tudo',
        'nav.examples': 'Ver Exemplos',
        'nav.home': 'Início',
        'nav.backToHome': '← Voltar',
        
        // Hero
        'hero.badge': '✨ Grátis e fácil de usar',
        'hero.badgePro': '🔥 Modo Pro Ativado',
        'hero.title': 'Widgets Educacionais',
        'hero.subtitle': 'Prontos em 30 Segundos',
        'hero.subtitlePro': 'Grátis para sempre e sem anúncios',
        'hero.description': 'Integre contagem regressiva, calculadora de semanas e sorteios no Moodle, Blackboard, Canvas ou qualquer site.',
        'hero.descriptionBold': 'Sem programação!',
        'hero.cta': 'Ver 35+ Exemplos Prontos',
        'hero.quickExample': 'Exemplo Super Fácil: Copie e Cole no seu LMS',
        'hero.step1': 'Passo 1:',
        'hero.step1Desc': 'Copie este código e cole no Moodle, Blackboard ou seu site:',
        'hero.step2': 'Passo 2:',
        'hero.step2Desc': 'Pronto! Você já tem uma contagem regressiva funcionando.',
        'hero.seeMore': 'Ver mais widgets →',
        'hero.compatible': 'Compatível com:',
        'hero.anyWeb': 'Qualquer Site',
        
        // Widgets Section
        'widgets.title': '11 Widgets Prontos para Usar',
        'widgets.subtitle': 'Selecione, configure e obtenha o código embutido em segundos',
        
        // Widget Cards
        'widget.countdown.title': 'Contagem Regressiva',
        'widget.countdown.desc': 'Temporizador para exames, entregas e eventos importantes',
        'widget.countdown.feat1': 'Atualização em tempo real',
        'widget.countdown.feat2': 'Cores personalizáveis',
        'widget.countdown.feat3': 'Responsivo',
        'widget.countdown.configure': 'Configurar',
        'widget.countdown.demo': 'Demo',
        
        'widget.stopwatch.title': 'Cronômetro Ascendente',
        'widget.stopwatch.desc': 'Tempo decorrido desde um evento ou data de início',
        'widget.stopwatch.feat1': 'Conta para frente',
        'widget.stopwatch.feat2': 'Tempo de funcionamento',
        'widget.stopwatch.feat3': 'Personalizável',
        
        'widget.weeks.title': 'Calculadora de Semanas',
        'widget.weeks.desc': 'Organize seu curso por semanas com atividades programadas',
        'widget.weeks.feat1': 'Semana atual destacada',
        'widget.weeks.feat2': 'Atividades por semana',
        'widget.weeks.feat3': 'Ideal para cursos',
        
        'widget.raffle.title': 'Sorteio Interativo',
        'widget.raffle.desc': 'Sorteios animados para selecionar vencedores ou participantes',
        'widget.raffle.feat1': 'Animação de roleta',
        'widget.raffle.feat2': 'Efeitos visuais e confete',
        'widget.raffle.feat3': 'Múltiplos vencedores',
        
        'widget.qr.title': 'Gerador de QR',
        'widget.qr.desc': 'Crie códigos QR personalizados para URLs, textos e mais',
        'widget.qr.feat1': 'URLs, texto, WiFi, email',
        'widget.qr.feat2': 'Cores personalizáveis',
        'widget.qr.feat3': 'Download direto PNG',
        
        'widget.roulette.title': 'Seletor de Estudante',
        'widget.roulette.desc': 'Seleção rápida e aleatória de participantes',
        'widget.roulette.feat1': 'Animação rápida de roleta',
        'widget.roulette.feat2': 'Remove já selecionados',
        'widget.roulette.feat3': 'Ideal para participação',
        
        'widget.grades.title': 'Calculadora de Notas',
        'widget.grades.desc': 'Média ponderada e "Que nota preciso?"',
        'widget.grades.feat1': 'Cálculo automático ponderado',
        'widget.grades.feat2': 'Que nota preciso para passar?',
        'widget.grades.feat3': 'Barras de progresso visuais',
        
        'widget.teams.title': 'Gerador de Equipes',
        'widget.teams.desc': 'Divida participantes em equipes balanceadas',
        'widget.teams.feat1': 'Atribuição aleatória balanceada',
        'widget.teams.feat2': 'Edição drag & drop ao vivo',
        'widget.teams.feat3': 'Exportar lista de equipes',
        
        'widget.pomodoro.title': 'Timer Pomodoro',
        'widget.pomodoro.desc': 'Técnica de produtividade com intervalos trabalho-descanso',
        'widget.pomodoro.feat1': 'Timer configurável (25/5 min)',
        'widget.pomodoro.feat2': 'Contador de sessões completas',
        'widget.pomodoro.feat3': 'Notificações e sons',
        
        'widget.leaderboard.title': 'Tabela de Classificação',
        'widget.leaderboard.desc': 'Rankings de estudantes, equipes ou competições',
        'widget.leaderboard.feat1': 'Ordenação automática',
        'widget.leaderboard.feat2': 'Medalhas para top 3',
        'widget.leaderboard.feat3': '3 estilos de visualização',
        
        'widget.voting.title': 'Votação ao Vivo',
        'widget.voting.desc': 'Tome decisões na aula com votação em tempo real',
        'widget.voting.feat1': 'Botões + / - para contar votos',
        'widget.voting.feat2': 'Mostra vencedor com confete',
        'widget.voting.feat3': 'Ideal para tomar decisões',
        
        // Integration
        'integration.title': 'How to Integrate in Your LMS',
        'integration.subtitle': '3 simple steps to have widgets working in minutes',
        'integration.step1.title': 'Configure Your Widget',
        'integration.step1.desc': 'Choose the widget you need, customize colors, texts and dates from our visual interface. No programming required.',
        'integration.step2.title': 'Copy the Code',
        'integration.step2.desc': 'Get the automatically generated iframe code. It\'s a simple copy and paste. You can also use the direct link.',
        'integration.step3.title': 'Paste in Your LMS',
        'integration.step3.desc': 'In Moodle, Blackboard, Canvas or your website, activate the HTML editor and paste the code. Works instantly!',
        
        // Features
        'features.title': 'Why Use WidKit?',
        'features.fast.title': 'Fast',
        'features.fast.desc': 'Configure in 30 seconds, no installations',
        'features.custom.title': 'Customizable',
        'features.custom.desc': 'Colors, texts and styles to your liking',
        'features.nodb.title': 'No Database',
        'features.nodb.desc': 'Everything works by URL, no backend',
        'features.responsive.title': 'Responsive',
        'features.responsive.desc': 'Adapts to mobile, tablet and desktop',
        
        // Footer
        'footer.subtitle': 'Free Educational Widgets',
        'footer.description': 'Like the wise owl, manage your time and events. Embeddable widgets for education without code, without registration and completely free.',
        'footer.free': '✓ 100% Free',
        'footer.noregister': '✓ No Registration',
        'footer.opensource': '✓ Open Source',
        'footer.widgets': '✓ 11 Widgets',
        'footer.time': 'Time',
        'footer.class': 'Classroom',
        'footer.tools': 'Tools',
        'footer.resources': 'Resources',
        'footer.community': 'Community',
        'footer.copyright': '© 2025 WidKit. All rights reserved.',
        'footer.terms': 'Terms',
        'footer.privacy': 'Privacy',
        'footer.developed': 'Developed with ❤️ by',
        
        // Common
        'common.copy': 'Copiar',
        'common.copied': '✓ Copiado',
        'common.close': 'Fechar',
        'common.configure': 'Configurar',
        'common.demo': 'Demo',
        'common.preview': 'Visualização',
        'common.refresh': 'Atualizar',
        'common.openNewTab': 'Abrir em Nova Aba',
        'common.directLink': '🔗 Link Direto',
        'common.embedCode': '📦 Código Incorporado (iframe)',
        'common.shareIntegrate': '📤 Compartilhar e Integrar',
        'common.qrCode': 'QR',
        
        // Platform Instructions
        'platform.title': 'Instruções Específicas por Plataforma',
        'platform.moodle.step1': 'Ative o modo de edição no seu curso',
        'platform.moodle.step2': 'Adicione um "Rótulo" ou "Página"',
        'platform.moodle.step3': 'Clique no botão HTML (</>)',
        'platform.moodle.step4': 'Cole o código iframe',
        'platform.moodle.step5': 'Salve e pronto!',
        'platform.blackboard.step1': 'Vá para a área de conteúdo',
        'platform.blackboard.step2': 'Selecione "Criar conteúdo" → "Item"',
        'platform.blackboard.step3': 'No editor, mude para visualização HTML',
        'platform.blackboard.step4': 'Cole o código iframe',
        'platform.blackboard.step5': 'Envie e funciona!',
        'platform.canvas.step1': 'Edite uma página ou módulo',
        'platform.canvas.step2': 'Clique em "Editor HTML" (ícone </>)',
        'platform.canvas.step3': 'Cole o código iframe',
        'platform.canvas.step4': 'Salve as alterações',
        'platform.canvas.step5': 'Pronto para usar!',
        'platform.web.step1': 'Edite sua página ou post',
        'platform.web.step2': 'Adicione um bloco "HTML personalizado"',
        'platform.web.step3': 'Cole o código iframe',
        'platform.web.step4': 'Publique',
        'platform.web.step5': 'Visível instantaneamente!',
        'platform.web.title': 'Site / WordPress',
        
        // Pro Mode
        'promode.button': 'Modo Pro',
        'promode.buttonNormal': 'Modo Normal',
    }
};

// Banderas por idioma
const languageFlags = {
    'es': 'ES',
    'en': 'EN',
    'pt': 'PT'
};

// Idioma actual
let currentLanguage = localStorage.getItem('widkit-lang') || 'es';

// Función para obtener una traducción
function t(key) {
    return translations[currentLanguage]?.[key] || translations['es'][key] || key;
}

// Función para cambiar idioma
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('widkit-lang', lang);
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Actualizar selector de idioma
    updateLanguageSelector();
    
    // Actualizar botón de Modo Pro si existe
    updateProModeButton();
    
    // Mostrar notificación de cambio de idioma
    showLanguageNotification(lang);
    
    // Disparar evento personalizado para que otras partes de la app puedan reaccionar
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Actualizar selector de idioma visual
function updateLanguageSelector() {
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active', 'bg-amber-100', 'text-amber-700', 'font-bold');
            option.classList.remove('text-slate-600');
        } else {
            option.classList.remove('active', 'bg-amber-100', 'text-amber-700', 'font-bold');
            option.classList.add('text-slate-600');
        }
    });
    
    // Actualizar bandera del selector móvil
    const currentLangFlag = document.getElementById('currentLangFlag');
    if (currentLangFlag && languageFlags[currentLanguage]) {
        currentLangFlag.textContent = languageFlags[currentLanguage];
    }
}

// Actualizar botón de Modo Pro con traducción
function updateProModeButton() {
    const proToggle = document.getElementById('proToggle');
    if (!proToggle) return;
    
    // Verificar si el modo Pro está activo buscando la clase
    const isProActive = document.getElementById('mainBody')?.classList.contains('pro-mode');
    
    if (isProActive) {
        // Modo Pro activo - mantener la imagen
        const hasImage = proToggle.querySelector('img');
        if (hasImage) {
            proToggle.innerHTML = '<span class="flame-icon is-image"><img src="assets/img/icons/widkit_fuego_xl.png" alt="Fire"></span><span data-i18n="promode.buttonNormal">' + t('promode.buttonNormal') + '</span>';
        }
    } else {
        // Modo normal - mantener el emoji
        const hasEmoji = proToggle.textContent.includes('🔥');
        if (hasEmoji || !proToggle.querySelector('img')) {
            proToggle.innerHTML = '<span class="flame-icon">🔥</span><span data-i18n="promode.button">' + t('promode.button') + '</span>';
        }
    }
}

// Mostrar notificación de cambio de idioma
function showLanguageNotification(lang) {
    // No mostrar en la carga inicial
    const isInitialLoad = !document.querySelector('.lang-notification');
    
    // Nombres de idiomas
    const langNames = {
        'es': 'Español',
        'en': 'English',
        'pt': 'Português'
    };
    
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = 'lang-notification fixed top-20 right-4 z-[60] bg-white rounded-xl shadow-2xl border-2 border-amber-500 p-4 transform transition-all duration-300';
    notification.style.animation = 'slideInRight 0.3s ease-out';
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <div class="text-2xl">${languageFlags[lang]}</div>
            <div>
                <p class="font-bold text-slate-900">${langNames[lang]}</p>
                <p class="text-xs text-slate-600">Idioma actualizado</p>
            </div>
        </div>
    `;
    
    // Solo si no es la carga inicial
    const existingNotification = document.querySelector('.lang-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Agregar al DOM solo si se hizo click (no en carga inicial)
    if (localStorage.getItem('widkit-lang-changed')) {
        document.body.appendChild(notification);
        
        // Remover después de 2 segundos
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
    
    // Marcar que hubo un cambio
    localStorage.setItem('widkit-lang-changed', 'true');
}

// Inicializar traducciones al cargar la página
function initI18n() {
    // Limpiar flag de cambio en la carga
    if (document.readyState === 'loading') {
        localStorage.removeItem('widkit-lang-changed');
    }
    
    // Solo aplicar traducciones si la página tiene elementos con data-i18n
    const hasTranslatableElements = document.querySelectorAll('[data-i18n]').length > 0;
    if (hasTranslatableElements) {
        changeLanguage(currentLanguage);
    }
}

// Auto-inicializar cuando el DOM esté listo solo en páginas con traducción
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}

// Agregar animación para las notificaciones
if (!document.querySelector('#lang-notification-styles')) {
    const style = document.createElement('style');
    style.id = 'lang-notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(400px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
}

