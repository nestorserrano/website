const proyectos = [
  {
    categoria: 'ERP', color: '#3b82f6',
    titulo: 'Implementación Softland ERP — Empresa Comercial',
    descripcion: 'Implementación completa de Softland ERP para empresa distribuidora, incluyendo módulos de inventario, ventas, cuentas por cobrar y contabilidad.',
    tecnologias: ['Softland ERP', 'SQL Server', 'Crystal Reports']
  },
  {
    categoria: 'ERP', color: '#8b5cf6',
    titulo: 'Migración Profit 2K8 a Profit 2K12',
    descripcion: 'Migración exitosa de base de datos y parametrización del sistema Profit Plus de versión 2K8 a 2K12 sin pérdida de información histórica.',
    tecnologias: ['Profit 2K12', 'SQL Server', 'Migración de datos']
  },
  {
    categoria: 'Desarrollo', color: '#06b6d4',
    titulo: 'Portal web de gestión de inventarios a la medida',
    descripcion: 'Sistema web personalizado para control de inventarios en tiempo real con integración al ERP existente y alertas automáticas.',
    tecnologias: ['React', 'Node.js', 'MySQL', 'REST API']
  },
  {
    categoria: 'IA & Analytics', color: '#10b981',
    titulo: 'Dashboard de inteligencia de negocios',
    descripcion: 'Plataforma de BI con visualizaciones interactivas y modelos predictivos para empresa de distribución.',
    tecnologias: ['Power BI', 'Python', 'Machine Learning']
  },
  {
    categoria: 'Infraestructura', color: '#f59e0b',
    titulo: 'Red empresarial y servidores — Empresa de servicios',
    descripcion: 'Diseño e instalación de red LAN/WiFi empresarial, configuración de servidor de archivos y sistema de backup automático.',
    tecnologias: ['Windows Server', 'Cisco', 'Veeam Backup']
  },
  {
    categoria: 'Cloud', color: '#ec4899',
    titulo: 'Migración a la nube — Sistema administrativo',
    descripcion: 'Migración de servidores on-premise a AWS con reducción del 40% en costos operativos y alta disponibilidad.',
    tecnologias: ['AWS EC2', 'RDS', 'S3', 'CloudFormation']
  }
]

export default function Portafolio() {
  return (
    <section id="portafolio" style={{ background: '#0a0a14', padding: '5rem 0' }}>
      <div className="container-fluid px-4 px-lg-5 w-100">

        <div className="text-center mb-5">
          <p className="text-uppercase fw-semibold mb-2" style={{ color: '#60a5fa', letterSpacing: '2px', fontSize: '0.85rem' }}>
            Nuestro trabajo
          </p>
          <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f1f5f9' }}>
            Portafolio de Proyectos
          </h2>
          <p className="mx-auto" style={{ color: '#94a3b8', maxWidth: '560px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Casos de éxito que demuestran nuestra experiencia y resultados reales
          </p>
        </div>

        <div className="row g-4">
          {proyectos.map((p, i) => (
            <div key={i} className="col-md-6 col-xl-4">
              <div className="h-100 p-4 rounded-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <span className="badge rounded-pill mb-3 px-3 py-2" style={{ background: p.color, fontSize: '0.75rem', letterSpacing: '1px' }}>
                  {p.categoria}
                </span>
                <h5 className="fw-bold mb-2" style={{ color: '#f1f5f9', lineHeight: 1.4 }}>{p.titulo}</h5>
                <p className="mb-3" style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.descripcion}</p>
                <div className="d-flex flex-wrap gap-2">
                  {p.tecnologias.map((t, j) => (
                    <span key={j} className="badge rounded-pill"
                      style={{ background: 'rgba(59,130,246,0.12)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.25)', fontWeight: 400 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
