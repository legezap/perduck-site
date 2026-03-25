/* ============================================================
   Analytics — GA4 + Yandex Metrica
   Replace placeholder IDs with your actual tracking IDs
   ============================================================ */

// --- Google Analytics 4 ---
// Replace G-XXXXXXXXXX with your GA4 Measurement ID
// Get it at: https://analytics.google.com → Admin → Data Streams
(function() {
  var GA_ID = 'G-XXXXXXXXXX'; // <-- REPLACE THIS
  if (GA_ID === 'G-XXXXXXXXXX') return; // Skip if placeholder

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, {
    page_title: document.title,
    page_location: window.location.href
  });

  // Track CTA clicks
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.btn-primary, .btn-outline, .wa-float');
    if (btn) {
      gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: btn.textContent.trim().substring(0, 50),
        link_url: btn.href || ''
      });
    }
  });

  // Track form submissions
  var form = document.getElementById('rfpForm');
  if (form) {
    form.addEventListener('submit', function() {
      gtag('event', 'form_submit', {
        event_category: 'conversion',
        event_label: 'rfp_form'
      });
    });
  }
})();

// --- Yandex Metrica ---
// Replace XXXXXXXX with your Yandex Metrica counter ID
// Get it at: https://metrica.yandex.com → Add counter
(function() {
  var YM_ID = 00000000; // <-- REPLACE THIS with your counter number
  if (YM_ID === 0 || YM_ID === 00000000) return; // Skip if placeholder

  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
  k=e.createElement(t);a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
  (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

  ym(YM_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    trackHash: true
  });

  // Noscript pixel fallback is handled via <noscript> in HTML
  window._ymId = YM_ID;
})();

// --- Download Tracking ---
// Tracks PDF/document downloads and sends to n8n webhook for Airtable activity log
(function() {
  var DOWNLOAD_WEBHOOK = ''; // <-- REPLACE with your n8n webhook URL: https://YOUR-N8N.app.n8n.cloud/webhook/download-track

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href$=".pdf"], #capabilityDownload');
    if (!link) return;

    var fileName = link.getAttribute('href') || 'unknown';
    var pagePath = window.location.pathname;

    // Track in GA4 if available
    if (window.gtag) {
      window.gtag('event', 'file_download', {
        event_category: 'conversion',
        event_label: fileName,
        file_name: fileName
      });
    }

    // Track in Yandex Metrica if available
    if (window.ym && window._ymId) {
      window.ym(window._ymId, 'reachGoal', 'download', { file: fileName });
    }

    // Send to n8n webhook for CRM tracking (non-blocking)
    if (DOWNLOAD_WEBHOOK) {
      var payload = JSON.stringify({
        event: 'file_download',
        file_name: fileName,
        page: pagePath,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        user_agent: navigator.userAgent
      });
      // Use sendBeacon for reliable delivery even if user navigates away
      if (navigator.sendBeacon) {
        navigator.sendBeacon(DOWNLOAD_WEBHOOK, new Blob([payload], { type: 'application/json' }));
      } else {
        fetch(DOWNLOAD_WEBHOOK, { method: 'POST', body: payload, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(function() {});
      }
    }
  });
})();
