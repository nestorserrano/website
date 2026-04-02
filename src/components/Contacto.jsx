import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', servicio: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const cambiar = e => setForm({ ...form, [e.target.name]: e.target.value })

  const enviar = e => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
    setForm({ nombre: '', empresa: '', email: '', servicio: '', mensaje: '' })
  }

  const inputEstilo = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#f1f5f9',
    borderRadius: '10px'
  }

  return (
    <section id="contacto" style={{ background: '#0a0a14', padding: '5rem 0' }}>
      <div className="container-fluid px-4 px-lg-5 w-100">

        <div className="text-center mb-5">
          <p className="text-uppercase fw-semibold mb-2" style={{ color: '#60a5fa', letterSpacing: '2px', fontSize: '0.85rem' }}>
            Hablemos
          </p>
          <h2 className="fw-black mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f1f5f9' }}>
            Agenda tu consulta gratuita
          </h2>
          <p className="mx-auto" style={{ color: '#94a3b8', maxWidth: '500px', fontSize: '1.05rem' }}>
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas
          </p>
        </div>

        <div className="row g-5">

          {/* Información de contacto */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4">
              {[
                { icono: '📧', titulo: 'Correo electrónico', valor: 'info@zyntello.com', href: 'mailto:info@zyntello.com' },
                { icono: '📱', titulo: 'WhatsApp', valor: '+1 829 639 9877', href: 'https://wa.me/18296399877' },
                { icono: '🌎', titulo: 'Cobertura', valor: 'RD · Venezuela · Colombia · Guatemala · Costa Rica · Soporte remoto', href: null },
                { icono: '🕐', titulo: 'Horario de atención', valor: 'Lun - Vie: 8am - 6pm (AST)', href: null },
              ].map((item, i) => (
                <div key={i} className="d-flex align-items-start gap-3">
                  <div style={{ fontSize: '1.6rem', lineHeight: 1 }}>{item.icono}</div>
                  <div>
                    <div className="fw-semibold mb-1" style={{ color: '#f1f5f9', fontSize: '0.9rem' }}>{item.titulo}</div>
                    {item.href
                      ? <a href={item.href} style={{ color: '#60a5fa', fontSize: '0.95rem', textDecoration: 'none' }}>{item.valor}</a>
                      : <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{item.valor}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="col-lg-8">
            <form onSubmit={enviar}>
              {enviado && (
                <div className="alert mb-4 rounded-3" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399' }}>
                  ✅ ¡Mensaje enviado! Te contactaremos pronto.
                </div>
              )}
              <div className="row g-3">
                <div className="col-sm-6">
                  <input className="form-control py-3" style={inputEstilo} name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={cambiar} required />
                </div>
                <div className="col-sm-6">
                  <input className="form-control py-3" style={inputEstilo} name="empresa" placeholder="Tu empresa" value={form.empresa} onChange={cambiar} />
                </div>
                <div className="col-12">
                  <input className="form-control py-3" style={inputEstilo} type="email" name="email" placeholder="Correo electrónico" value={form.email} onChange={cambiar} required />
                </div>
                <div className="col-12">
                  <select className="form-select py-3" style={{ ...inputEstilo }} name="servicio" value={form.servicio} onChange={cambiar} required>
                    <option value="" style={{ background: '#0f172a' }}>Selecciona un servicio</option>
                    <option value="erp" style={{ background: '#0f172a' }}>Consultoría ERP (Softland / Profit)</option>
                    <option value="medida" style={{ background: '#0f172a' }}>Soluciones a la Medida</option>
                    <option value="ia" style={{ background: '#0f172a' }}>Inteligencia Artificial</option>
                    <option value="tecnico" style={{ background: '#0f172a' }}>Servicio Técnico</option>
                    <option value="equipos" style={{ background: '#0f172a' }}>Asesoría y Venta de Equipos</option>
                    <option value="contable" style={{ background: '#0f172a' }}>Consultoría Contable</option>
                    <option value="marketing" style={{ background: '#0f172a' }}>Marketing Digital</option>
                    <option value="electoral" style={{ background: '#0f172a' }}>Consultoría Electoral & Política</option>
                    <option value="encuestas" style={{ background: '#0f172a' }}>Encuestas & Estudios de Mercado</option>
                    <option value="cloud" style={{ background: '#0f172a' }}>Migración a la Nube / Cloud</option>
                    <option value="transformacion" style={{ background: '#0f172a' }}>Consultoría y Transformación Digital</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea className="form-control py-3" style={inputEstilo} name="mensaje" placeholder="Cuéntanos tu proyecto..." rows="5" value={form.mensaje} onChange={cambiar} required></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-lg w-100 fw-semibold rounded-3 py-3">
                    Enviar mensaje →
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
