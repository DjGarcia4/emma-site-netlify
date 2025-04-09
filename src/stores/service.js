import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores/app";
import { ref } from "vue";

export const useServiceStore = defineStore("service", () => {
  const router = useRouter();
  const currentService = ref({});
  const appStore = useAppStore();

  const handleCurrentService = (service) => {
    currentService.value = service;
  };

  const services = [
    {
      title: "Mama",
      description:
        "Detección, diagnóstico y seguimiento especializado en salud mamaria.",
      icon: ["fas", "ribbon"], // fa-ribbon representa concienciación, cáncer de mama
    },
    {
      title: "Órganos Genitales Masculinos",
      description:
        "Atención y evaluación integral de la salud reproductiva masculina.",
      icon: ["fas", "male"], // fa-male
    },
    {
      title: "Órganos Genitales Femeninos",
      description: "Diagnóstico y tratamiento de condiciones ginecológicas.",
      icon: ["fas", "female"], // fa-female
    },
    {
      title: "Tracto Urinario",
      description: "Estudios y tratamientos enfocados en el sistema urinario.",
      icon: ["fas", "tint"], // fa-tint (gotas, asociado a funciones urinarias)
    },
    {
      title: "Sistema Nervioso y Ojos",
      description:
        "Diagnóstico de patologías del encéfalo, ojos y sistema nervioso.",
      icon: ["fas", "eye"], // fa-eye
    },
    {
      title: "Tiroides y Glándulas Endocrinas",
      description: "Evaluación y manejo de trastornos endocrinos.",
      icon: ["fas", "balance-scale"], // fa-balance-scale (representa equilibrio hormonal)
    },
    {
      title: "Ganglios Linfáticos",
      description: "Estudios especializados del sistema linfático.",
      icon: ["fas", "sitemap"], // fa-sitemap (estructura tipo red, representa sistema linfático)
    },
    {
      title: "Leucemia Mieloide Crónica",
      description: "Centro de referencia nacional con apoyo de Max Foundation.",
      icon: ["fas", "vial"], // fa-vial (asociado a estudios hematológicos)
    },
    {
      title: "Registro y Estadísticas",
      description:
        "Análisis y monitoreo del cáncer en distintos departamentos del país.",
      icon: ["fas", "chart-bar"], // fa-chart-bar
    },
    {
      title: "Radiología",
      description: "Mamografía, rayos X y ultrasonido con tecnología avanzada.",
      icon: ["fas", "x-ray"], // fa-x-ray
    },
    {
      title: "Medicina Nuclear",
      description:
        "Diagnóstico por gammacámara y tratamientos con yodo radioactivo.",
      icon: ["fas", "atom"], // fa-atom
    },
    {
      title: "Consulta Externa",
      description: "Atención médica especializada en diversas áreas.",
      icon: ["fas", "stethoscope"], // fa-stethoscope
    },
    {
      title: "Braquiterapia",
      description:
        "Terapia localizada con alta precisión para tratamiento del cáncer.",
      icon: ["fas", "dot-circle"], // fa-dot-circle
    },
    {
      title: "Cuidados Paliativos",
      description:
        "Apoyo integral para mejorar la calidad de vida del paciente.",
      icon: ["fas", "hand-holding-heart"], // fa-hand-holding-heart
    },
    {
      title: "Labio, Cavidad Bucal y Faringe",
      description: "Diagnóstico y seguimiento de cánceres de la región oral.",
      icon: ["fas", "teeth-open"], // fa-teeth-open
    },
    {
      title: "Órganos Digestivos",
      description: "Atención especializada en patologías gastrointestinales.",
      icon: ["fas", "utensils"], // fa-utensils
    },
    {
      title: "Sistema Respiratorio",
      description: "Evaluación y tratamiento de afecciones pulmonares.",
      icon: ["fas", "lungs"], // fa-lungs
    },
    {
      title: "Huesos y Articulaciones",
      description: "Diagnóstico y cuidado de afecciones óseas y articulares.",
      icon: ["fas", "bone"], // fa-bone
    },
    {
      title: "Sistema Hematopoyético",
      description: "Estudios de sangre y enfermedades de la médula ósea.",
      icon: ["fas", "procedures"], // fa-procedures
    },
    {
      title: "Piel",
      description: "Tratamiento de lesiones y enfermedades cutáneas.",
      icon: ["fas", "allergies"], // fa-allergies
    },
    {
      title: "Sistema Nervioso Periférico",
      description: "Evaluación de los nervios periféricos y autónomos.",
      icon: ["fas", "brain"], // fa-brain
    },
    {
      title: "Peritoneo y Retroperitoneo",
      description: "Diagnóstico de afecciones abdominales profundas.",
      icon: ["fas", "layer-group"], // fa-layer-group
    },
    {
      title: "Tejido Conjuntivo",
      description: "Evaluación de masas, tumores y lesiones blandas.",
      icon: ["fas", "grip-lines-vertical"], // fa-grip-lines-vertical
    },
    {
      title: "Gastroenterología",
      description: "Endoscopía y colonoscopía para diagnóstico digestivo.",
      icon: ["fas", "microscope"], // fa-microscope
    },
    {
      title: "Radioterapia",
      description: "Unidad equipada con cobalto 60 y acelerador lineal.",
      icon: ["fas", "radiation"], // fa-radiation
    },
    {
      title: "Laboratorio Clínico",
      description: "Análisis clínicos completos para diagnóstico médico.",
      icon: ["fas", "flask"], // fa-flask
    },
    {
      title: "Citometría de Flujo",
      description: "Estudios avanzados de células y componentes sanguíneos.",
      icon: ["fas", "project-diagram"], // fa-project-diagram
    },
    {
      title: "Colposcopio Digital",
      description:
        "Visualización precisa del cuello uterino con tecnología digital.",
      icon: ["fas", "camera-retro"], // fa-camera-retro
    },
    {
      title: "Crioterapia",
      description: "Tratamiento con frío para lesiones precancerosas.",
      icon: ["fas", "snowflake"], // fa-snowflake
    },
    {
      title: "Psicología",
      description:
        "Apoyo emocional individual y familiar durante el tratamiento.",
      icon: ["fas", "user-injured"], // fa-user-injured
    },
    {
      title: "Trabajo Social",
      description:
        "Acompañamiento en gestiones sociales y apoyo integral al paciente.",
      icon: ["fas", "hands-helping"], // fa-hands-helping
    },
  ];
  return { services, currentService, handleCurrentService };
});
