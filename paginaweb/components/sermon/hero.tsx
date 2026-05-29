"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Shield, CheckCircle } from "lucide-react"

const slides = [
  {
    title: "Proteccion Contra Incendio",
    subtitle: "SISTEMAS INTEGRALES",
    description: "Instalacion profesional de sistemas de deteccion y supresion de incendios para proteger su negocio.",
  },
  {
    title: "Servicio Tecnico Especializado",
    subtitle: "MANTENIMIENTO PREVENTIVO",
    description: "Mantenemos sus sistemas en optimas condiciones con personal altamente capacitado.",
  },
  {
    title: "Soluciones a Medida",
    subtitle: "DISEÑO E INGENIERIA",
    description: "Diseñamos sistemas personalizados que se adaptan a las necesidades especificas de su empresa.",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 md:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(180,60,40,0.3)_0%,rgba(20,20,20,0.9)_100%)]" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="text-card">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{slides[currentSlide].subtitle}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-lg md:text-xl text-card/80 mb-8 max-w-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Solicitar Cotizacion
              </Button>
              <Button size="lg" variant="outline" className="border-card/30 text-card hover:bg-card/10">
                Conocer Mas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-card/20">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">15+</p>
                <p className="text-sm text-card/70">Años de Experiencia</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
                <p className="text-sm text-card/70">Proyectos Completados</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-card/70">Clientes Satisfechos</p>
              </div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="hidden md:block">
            <div className="bg-card/10 backdrop-blur-sm border border-card/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-card mb-6">Por que elegirnos</h3>
              <ul className="space-y-4">
                {[
                  "Personal certificado y capacitado",
                  "Equipos de ultima generacion",
                  "Respuesta inmediata 24/7",
                  "Garantia en todos nuestros servicios",
                  "Precios competitivos",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-card/90">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-card/30 text-card hover:bg-card/10 transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-card/30"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-card/30 text-card hover:bg-card/10 transition-colors"
            aria-label="Siguiente slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
