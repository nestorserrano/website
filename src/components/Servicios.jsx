const servicios = [
  {
    icono: '🤖',
    titulo: 'Automatización con IA',
    descripcion: 'Implementamos agentes de Inteligencia Artificial que automatizan tareas, generan reportes y conectan tus sistemas existentes. Menos trabajo manual, más decisiones inteligentes.',
    items: ['Agentes IA para tareas repetitivas', 'Generación automática de reportes', 'Conexión entre sistemas existentes', 'Flujos de trabajo inteligentes'],
    color: '#8b5cf6'
  },
  {
    icono: '⚙️',
    titulo: 'ERP y CRM',
    descripcion: 'Personalizamos e implementamos Softland, ODOO y otras plataformas ERP/CRM adaptadas al flujo real de tu empresa. Integración con bases de datos existentes incluida.',
    items: ['Softland ERP / Profit 2K8 & 2K12', 'ODOO y plataformas abiertas', 'Integración con bases de datos actuales', 'Capacitación y soporte continuo'],
    color: '#3b82f6'
  },
  {
    icono: '🔧',
    titulo: 'Soporte Técnico TI',
    descripcion: 'Soporte especializado en infraestructura, redes, servidores y sistemas. SLA adaptados a tu operación, atención local en RD y remota para toda la región.',
    items: ['Infraestructura y redes empresariales', 'Servidores y sistemas operativos', 'SLA adaptados a tu operación', 'Presencial en RD·VE·CO·GT·CR — Remoto global'],
    color: '#f59e0b'
  },
  {
    icono: '👥',
    titulo: 'Colocación de Personal TI',
    descripcion: 'Conectamos empresas con talento tecnológico calificado. Perfiles desde técnicos de soporte hasta arquitectos de sistemas y especialistas en IA.',
    items: ['Técnicos de soporte y redes', 'Desarrolladores y analistas', 'Arquitectos de sistemas', 'Especialistas en IA y datos'],
    color: '#10b981'
  },
  {
    icono: '🖥️',
    titulo: 'Venta de Equipos y Soluciones',
    descripcion: 'Equipos, servidores, dispositivos de red y licencias de software empresarial con asesoría técnica incluida. Marcas líderes con garantía y soporte local.',
    items: ['Computadoras y servidores', 'Dispositivos de red (switches, routers)', 'Licencias software empresarial', 'Asesoría técnica incluida'],
    color: '#06b6d4'
  },
  {
    icono: '🏗️',
    titulo: 'Consultoría y Transformación Digital',
    descripcion: 'Evaluamos tu infraestructura y procesos actuales, diseñamos la hoja de ruta tecnológica y te acompañamos en cada paso de la implementación.',
    items: ['Diagnóstico de infraestructura actual', 'Hoja de ruta tecnológica', 'Arquitectura de sistemas', 'Acompañamiento en implementación'],
    color: '#f97316'
  },
  {
    icono: '📒',
    titulo: 'Consultoría Contable',
    descripcion: 'Asesoría contable y financiera integrada con tus sistemas ERP. Procesos de contabilidad, reportes fiscales y análisis financiero para tomar mejores decisiones.',
    items: ['Configuración contable en ERP', 'Reportes financieros y fiscales', 'Análisis de estados financieros', 'Asesoría en cumplimiento normativo'],
    color: '#14b8a6'
  },
  {
    icono: '📣',
    titulo: 'Marketing Digital',
    descripcion: 'Diseño y ejecución de estrategias de marketing digital para posicionar tu marca, atraer clientes y medir resultados con datos reales.',
    items: ['Gestión de redes sociales', 'Posicionamiento SEO / SEM', 'Publicidad digital (Google Ads, Meta)', 'Analítica de audiencias y conversión'],
    color: '#a855f7'
  },
  {
    icono: '🗳️',
    titulo: 'Consultoría Electoral & Política',
    descripcion: 'Consultoría estratégica para procesos electorales y campañas políticas basada en datos, análisis de percepción ciudadana e inteligencia de mercado.',
    items: ['Encuestas electorales y sondeos', 'Análisis de percepción ciudadana', 'Estrategia de campaña basada en datos', 'Monitoreo de tendencias y opinión pública'],
    color: '#ef4444'
  },
  {
    icono: '📊',
    titulo: 'Encuestas & Estudios de Mercado',
    descripcion: 'Investigación de opinión pública, análisis de tendencias, censos, muestreos y procesamiento de datos estadísticos para organismos públicos y privados.',
    items: ['Encuestas de opinión pública', 'Censos y muestreos poblacionales', 'Análisis demográfico y socioeconómico', 'Visualización y reportes estadísticos'],
    color: '#0ea5e9'
  }
]

export default function Servicios() {
  return (
    <section id="servicios" style={{ background: '#0f172a', padding: '5rem 0' }}>
      <div className="container-fluid px-4 px-lg-5">

        <div className="text-center mb-5">
          <p className="text-uppercase fw-semibold mb-2" style={{ color: '#60a5fa', letterSpacing: '2px', fontSize: '0.85rem' }}>
            ¿Qué ofrecemos?
          </p>
          <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f1f5f9' }}>
            Nuestros Servicios
          </h2>
          <p className="mx-auto" style={{ color: '#94a3b8', maxWidth: '580px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            No vendemos software enlatado. Construimos o adaptamos la tecnología exacta que tu empresa necesita.
          </p>
        </div>

        <div className="row g-4">
          {servicios.map((s, i) => (
            <div key={i} className="col-sm-6 col-xl-3">
              <div
                className="h-100 p-4 rounded-4"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'transform 0.25s, border-color 0.25s',
                  cursor: 'default'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.borderColor = s.color + '66'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                <div className="mb-3" style={{ fontSize: '2.2rem' }}>{s.icono}</div>
                <div className="fw-bold mb-2" style={{
                  color: '#f1f5f9', fontSize: '1.1rem',
                  borderLeft: `3px solid ${s.color}`, paddingLeft: '0.65rem', lineHeight: 1.3
                }}>
                  {s.titulo}
                </div>
                <p className="mb-3" style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.65 }}>
                  {s.descripcion}
                </p>
                <ul className="list-unstyled mb-0">
                  {s.items.map((item, j) => (
                    <li key={j} className="mb-1" style={{ color: s.color, fontSize: '0.85rem', opacity: 0.9 }}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
