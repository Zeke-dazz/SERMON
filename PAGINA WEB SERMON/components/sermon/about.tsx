"use client"

import { Award, Users, Clock, Target } from "lucide-react"

const stats = [
  { icon: Award, value: "15+", label: "Años de Trayectoria" },
  { icon: Users, value: "50+", label: "Profesionales" },
  { icon: Clock, value: "24/7", label: "Soporte Tecnico" },
  { icon: Target, value: "500+", label: "Proyectos" },
]

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Tu Socio Confiable en Seguridad Contra Incendio
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">SERMON</strong> es una empresa dedicada a los servicios y montajes 
                de sistemas contra incendio. Con mas de 15 años de experiencia en el mercado, nos hemos consolidado 
                como lideres en soluciones de proteccion contra incendios.
              </p>
              <p>
                Nuestro equipo de profesionales certificados trabaja con las mejores marcas y tecnologias 
                del mercado para garantizar la maxima proteccion de su inversion y lo mas importante: 
                la seguridad de las personas.
              </p>
              <p>
                Ofrecemos soluciones integrales que abarcan desde el diseño y la instalacion hasta el 
                mantenimiento preventivo y correctivo de todos los sistemas de proteccion contra incendio.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square bg-foreground rounded-2xl overflow-hidden relative">
              {/* Abstract fire safety visual */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(180,60,40,0.4)_0%,rgba(20,20,20,0.95)_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/30">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M12 6v6l4 2" />
                      <path d="M9 12h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-card mb-2">Respuesta Inmediata</h3>
                  <p className="text-card/80">Servicio tecnico disponible las 24 horas del dia, los 7 dias de la semana.</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-primary/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-primary/20 rounded-lg rotate-45" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Certificados</p>
                  <p className="text-sm text-muted-foreground">ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
