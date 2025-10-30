(function() {
  function renderAdminWidgetsNav() {
    var container = document.getElementById('admin-widgets-nav');
    if (!container) return;
    var path = window.location.pathname;
    var current = path.substring(path.lastIndexOf('/') + 1).toLowerCase();
    function link(href, label, emoji) {
      var active = current === href.toLowerCase();
      var base = 'px-4 py-2 text-slate-700 text-sm font-medium rounded-lg transition whitespace-nowrap ';
      var cls = active ? 'bg-amber-100 text-amber-700' : 'hover:bg-slate-100';
      return '<a href="' + href + '" class="' + base + cls + '">' + (emoji ? (emoji + ' ') : '') + label + '</a>';
    }
    var html = '' +
      '<div class="bg-white border-b border-slate-200">' +
      '  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">' +
      '    <nav class="flex gap-2 py-3 overflow-x-auto" aria-label="Widgets">' +
           link('temporizador.html', 'Cuenta Regresiva', '⏱️') +
           link('cronometro.html', 'Cronómetro', '🥇') +
           link('semana.html', 'Calculador de Semanas', '📅') +
           link('sorteo.html', 'Sorteo Interactivo', '🎲') +
           link('qr.html', 'Generador QR', '📱') +
           link('ruleta.html', 'Selector Estudiante', '🎯') +
           link('notas.html', 'Calculadora Notas', '🔢') +
           link('equipos.html', 'Generador Equipos', '👥') +
           link('pomodoro.html', 'Pomodoro', '⏲️') +
           link('leaderboard.html', 'Ranking', '🏆') +
           link('steps.html', 'Pasos', '👣') +
           link('quiz.html', 'Quiz', '📝') +
      '    </nav>' +
      '  </div>' +
      '</div>';
    container.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAdminWidgetsNav);
  } else {
    renderAdminWidgetsNav();
  }
})();


