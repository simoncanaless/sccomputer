/*
 * SC Computer — configuración del negocio
 * ---------------------------------------------------------------
 * Este archivo lo cargan index.html y agendar.html.
 * Aquí se cambian precios, zonas, horarios, datos de pago y el
 * número de WhatsApp, sin tocar la lógica de las páginas.
 */
const CONFIG = {

  // ── Contacto ────────────────────────────────────────────────
  whatsapp: '56932008072',                      // solo números, con código de país
  instagram: 'https://www.instagram.com/sc._computer/',

  // ── Equipos y precios (por equipo) ──────────────────────────
  // grupo: 'comp' (Computadores) o 'cons' (Consolas)
  // icono: 'torre' | 'notebook' | 'monitor' | 'control'
  equipos: [
    { id: 'pc',   grupo: 'comp', icono: 'torre',    nombre: 'PC de escritorio',      desc: 'Limpieza interna y pasta térmica del procesador', precio: 12000 },
    { id: 'nb',   grupo: 'comp', icono: 'notebook', nombre: 'Notebook',              desc: 'Limpieza interna, ventilador y pasta térmica',     precio: 18000 },
    { id: 'nbg',  grupo: 'comp', icono: 'notebook', nombre: 'Notebook gamer',        desc: 'Pasta térmica en CPU y GPU, revisión de pads',     precio: 22000 },
    { id: 'mini', grupo: 'comp', icono: 'monitor',  nombre: 'Mini PC / Todo-en-uno', desc: 'Limpieza interna + pasta térmica',                 precio: 15000 },
    { id: 'ps3',  grupo: 'cons', icono: 'control',  nombre: 'PS3',                   desc: 'Limpieza interna + pasta térmica',                 precio: 15000 },
    { id: 'ps4',  grupo: 'cons', icono: 'control',  nombre: 'PS4 (Fat, Slim o Pro)', desc: 'Limpieza interna + pasta térmica',                 precio: 15000 },
    { id: 'xone', grupo: 'cons', icono: 'control',  nombre: 'Xbox One (One, S o X)', desc: 'Limpieza interna + pasta térmica',                 precio: 15000 },
    { id: 'xss',  grupo: 'cons', icono: 'control',  nombre: 'Xbox Series S',         desc: 'Limpieza interna + pasta térmica',                 precio: 15000 },
    { id: 'xsx',  grupo: 'cons', icono: 'control',  nombre: 'Xbox Series X',         desc: 'Limpieza interna + pasta térmica',                 precio: 18000 },
  ],
  precioGPU: 7000,        // extra por tarjeta de video (solo con PC de escritorio; id 'pc')
  maxPorEquipo: 9,        // tope del contador de cada equipo

  // ── Traslado (retiro / entrega a domicilio) ─────────────────
  // Un solo cobro por pedido según la zona de la comuna.
  traslado: {
    zonas: {
      cerca: { tarifa: 2000 },
      media: { tarifa: 5000 },
      costa: { tarifa: 7000, diaFijo: true },   // diaFijo: los retiros solo se hacen el día 'diaCosta'
    },
    diaCosta: 'sab',      // 'lun' | 'mar' | 'mie' | 'jue' | 'vie' | 'sab' | 'dom'
    comunas: [
      { id: 'lacruz',   nombre: 'La Cruz',      zona: 'cerca' },
      { id: 'quillota', nombre: 'Quillota',     zona: 'cerca' },
      { id: 'calera',   nombre: 'La Calera',    zona: 'cerca' },
      { id: 'hijuelas', nombre: 'Hijuelas',     zona: 'media' },
      { id: 'nogales',  nombre: 'Nogales',      zona: 'media' },
      { id: 'limache',  nombre: 'Limache',      zona: 'media' },
      { id: 'olmue',    nombre: 'Olmué',        zona: 'media' },
      { id: 'concon',   nombre: 'Concón',       zona: 'costa' },
      { id: 'vina',     nombre: 'Viña del Mar', zona: 'costa' },
      { id: 'quilpue',  nombre: 'Quilpué',      zona: 'costa' },
      { id: 'otra',     nombre: 'Otra comuna',  zona: null },   // null = se cotiza por WhatsApp
    ],
  },

  // ── Calendario y disponibilidad ─────────────────────────────
  disponibilidad: {
    semanal: {           // horas recurrentes por día de la semana; [] = no disponible
      lun: ['10:00', '12:00', '15:00', '17:00', '19:00'],
      mar: [], mie: [], jue: [], vie: [],
      sab: ['13:00', '15:00', '17:00', '19:00'],   // sin horas en la mañana
      dom: ['13:00', '15:00', '17:00', '19:00'],
    },
    extra: {             // fechas sueltas que se habilitan (pisan a 'semanal'). Formato 'AAAA-MM-DD'
      '2026-11-10': ['10:00', '12:00', '15:00', '17:00', '19:00'],   // martes
      '2026-11-12': ['10:00', '12:00', '15:00', '17:00', '19:00'],   // jueves
    },
    bloqueadas: [        // fechas que se cierran aunque 'semanal' o 'extra' digan que hay horas
      // '2026-12-25',
    ],
    diasVisibles: 60,    // el calendario permite reservar desde mañana hasta hoy + 60 días
    horaCosta: '12:00',  // horario adicional para retiros en zona Costa
  },

  // ── Pago ────────────────────────────────────────────────────
  pago: {
    modo: 'abono',       // 'abono' = se transfiere el abono para reservar · 'total' = se transfiere todo
    abono: 5000,         // si el total es menor, el abono es igual al total
    datos: {             // se muestran solo en la pantalla de confirmación
      'Nombre': 'Simon Canales',
      'RUT': '21.280.840-7',
      'Banco': 'Banco de Chile',
      'Tipo de cuenta': 'Cuenta Vista',
      'N° de cuenta': '00-014-27220-62',
      'Correo': 'canalessimon06@gmail.com',
    },
  },
};
