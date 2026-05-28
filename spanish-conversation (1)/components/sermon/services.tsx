"use client"

import { Flame, Bell, Gauge, Wrench, ShieldCheck, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Flame,
    title: "Sistemas de Supresion",
    description: "Instalacion de sistemas automaticos de supresion de incendios incluyendo rociadores, agentes limpios y espuma.",
  },
  {
    icon: Bell,
    title: "Deteccion de Incendios",
    description: "Paneles de alarma, detectores de humo, calor y gas con tecnologia de ultima generacion.",
  },
  {
    icon: Gauge,
    title: "Extintores",
    description: "Venta, instalacion, recarga y mantenimiento de extintores portatiles de todos los tipos.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Preventivo",
    description: "Programas de mantenimiento periodico para garantizar el funcionamiento optimo de sus sistemas.",
  },
  {
    icon: ShieldCheck,
    title: "Certificaciones",
    description: "Certificacion y pruebas de sistemas contra incendio segun normativas nacionales e internacionales.",
  },
  {
    icon: Building,
    title: "Proyectos Industriales",
    description: "Soluciones integrales para plantas industriales, bodegas y edificios comerciales.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Soluciones Integrales en Proteccion Contra Incendio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios especializados para mantener su empresa segura y protegida.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <a 
                  href="#contacto" 
                  className="inline-flex items-center text-primary font-medium mt-4 hover:underline"
                >
                  Mas informacion
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
