import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores/app";
import { ref } from "vue";

export const useDepartmentStore = defineStore("department", () => {
  const router = useRouter();
  const currentDepartment = ref({});
  const appStore = useAppStore();

  const handleCurrentDepartment = (department) => {
    currentDepartment.value = department;
  };

  const departments = [
    {
      icon: "fa-atom",
      name: "Medicina nuclear",
      img: "",
      description:
        "La medicina nuclear es una especialidad de la medicina  en la que se utilizan radiotrazadores o radiofármacos (formados por un fármaco transportador y un isótopo radiactivo) para el diagnóstico y tratamiento de enfermedades. Estos radiofármacos se aplican dentro del organismo humano por diversas vías (la más utilizada es la vía intravenosa). Una vez que el radiofármaco está dentro del organismo, se distribuye por diversos órganos dependiendo del tipo empleado. La distribución de este es detectado por un aparato detector de radiación llamado gammacámara y almacenado digitalmente. Luego se procesa la información obteniendo imágenes de todo el cuerpo o del órgano en estudio. Estas imágenes, a diferencia de la mayoría de las obtenidas en radiología, son imágenes funcionales y moleculares, es decir, muestran cómo están funcionando los órganos y tejidos explorados o revelan alteraciones de los mismos a un nivel molecular.",
      slug: "medicina-nuclear",
    },
    {
      icon: "fa-stethoscope",
      name: "Gastroenterología",
      img: "",
      description:
        "La gastroenterología es la especialidad médica que se ocupa de las enfermedades del aparato digestivo y órganos asociados, conformado por: esófago, estómago, hígado y vías biliares, páncreas, intestino delgado (duodeno, yeyuno, íleon), colon y recto. El médico que practica esta especialidad se llama gastroenterólogo o especialista en aparato digestivo.",
      slug: "gastroenterologia",
    },
    {
      icon: "fa-x-ray",
      name: "Radiología",
      img: "",
      description:
        "La radiología es la especialidad médica, que se ocupa de generar imágenes del interior del cuerpo mediante diferentes agentes físicos (rayos X, ultrasonidos, campos magnéticos) y de utilizar estas imágenes para el diagnóstico y, en menor medida, para el pronóstico y el tratamiento de las enfermedades.También se le denomina genéricamente radiodiagnóstico o diagnóstico por imagen. La radiología debe distinguirse de la radioterapia, que no utiliza imágenes, sino que emplea directamente la radiación ionizante (rayos X de mayor energía que los usados para el diagnóstico, y también radiaciones de otro tipo) para el tratamiento de las enfermedades (por ejemplo, para detener o frenar el crecimiento de los tumores que son sensibles a la radiación).",
      slug: "radiologia",
    },
    {
      icon: "fa-magnifying-glass-chart",
      name: "Tomografía",
      img: "",
      description:
        "Tomografía es el proceso de obtención de imágenes por secciones. Un aparato usado en tomografía es llamado tomógrafo, mientras que la imagen producida es un tomograma. Este método es usado en medicina, arqueología, biología, geofísica, oceanografía, ciencia de los materiales y otras ciencias. En la mayoría de los casos se basa en un procedimiento matemático llamado reconstrucción tomográfica. Hay muchos tipos diferentes de tomografía, tal y como se listan posteriormente. Una tomografía de varias secciones de un cuerpo es conocida como politomografia. Algunos estudios han indicado que la TC puede ser efectiva tanto como examen de detección de cáncer colorrectal (incluso de examen de detección de pólipos grandes) como examen de detección de cáncer de pulmón. La tomografía computarizada no causa dolor. Sin embargo, al permanecer en la mesa en una posición durante el procedimiento puede ser un poco incómodo. La duración de un procedimiento de TC depende del tamaño de la zona del cuerpo que se explora, pero en general solo dura de unos cuantos minutos a media hora. Para la mayoría de la gente, la TC se administra en plan ambulatorio en un hospital o en un centro de radiología, sin permanecer en el hospital por la noche.",
      slug: "tomografia",
    },
    {
      icon: "fa-vial",
      name: "Laboratorio clínico",
      img: "",
      description:
        "Automatizado, equipo de última generación, se realizan todos los exámenes médicos.El laboratorio clínico es el lugar donde un equipo multidisciplinario formado por el médico patólogo clínico o analista clínico, los profesionales del laboratorio y los técnicos en análisis clínicos, analizan muestras biológicas humanas que contribuyen al estudio, prevención, y hace investigación viable para tu corazón. conoce como laboratorio de patología clínica y utiliza las metodologías de diversas disciplinas como la bioquímica- también llamada química clínica – hematología, inmunología y microbiología. En el laboratorio clínico se obtienen y se estudian muestras biológicas diversas, como sangre, orina, heces, líquido sinovial (articulaciones), líquido cefalorraquídeo, exudados faríngeos y vaginales, entre otros tipos de muestras.A los laboratorios acuden pacientes externos, puesto que los exámenes que se requieren de los enfermos hospitalizados se hacen mediante muestras que se toman en las unidades de hospitalización. En consecuencia su ubicación será preferentemente en la planta baja, con fácil acceso a la sección de recepción del Archivo Clínico y en menor grado con el departamento de Consulta Externa.",
      slug: "laboratorio-clinico",
    },
    {
      icon: "fa-radiation",
      name: "Radioterapia",
      img: "",
      description:
        "Terapia de radiación (también llamada radioterapia) es un tratamiento del cáncer que usa altas dosis de radiación para destruir células cancerosas y reducir tumores. En dosis bajas, la radiación se usa en rayos-x para ver el interior del cuerpo, como en radiografías de los dientes o de huesos fracturados.",
      slug: "radioterapia",
    },
    {
      icon: "fa-user-doctor",
      name: "Citometría",
      img: "",
      description:
        "Diagnósticos especiales y seguimiento de pacientes con problemas hematológicos, tumores sólidos , población de Linfocitos, de otras enfermedades inmunológicas en un periodo de 4 horas proporcionar un diagnóstico completo. La citometría de flujo es una tecnología biofísica basada en la utilización de luz láser, empleada en el recuento y clasificación de células según sus características morfológicas, presencia de biomarcadores, y en la ingeniería de proteínas. En los citómetros de flujo, las células suspendidas en un fluido atraviesan un finísimo tubo transparente sobre el que incide un delgado rayo de luz láser, la luz transmitida y dispersada por el pasaje de las células a través del tubo se recoge por medio de unos dispositivos de detección, permitiendo hacer inferencias en cuanto a tamaño y complejidad de las células. También permite el análisis multiparamétrico simultáneo de otras características físicas y químicas, evaluando en promedio más de dos mil partículas por segundo. La citometría de flujo es una técnica utilizada en forma rutinaria en muchos centros de salud para el diagnóstico y seguimiento de muchas enfermedades tales como las leucemias, granulomatosis crónica, y SIDA; sin embargo tiene muchísimas otras aplicaciones en investigación básica, práctica y ensayos clínicos. Una variante común de esta técnica es la separación física de partículas según sus propiedades, empleándose por ejemplo para purificar poblaciones de interés.",
      slug: "citometria",
    },
    {
      icon: "fa-prescription-bottle-medical",
      name: "Farmacia",
      img: "",
      description:
        "Medicamentos éticos, innovadores y todo lo necesario para tratamiento integral y multidisciplinario del paciente.",
      slug: "farmacia",
    },
    {
      icon: "fa-dna",
      name: "Braquiterapia",
      img: "",
      description:
        "La palabra braquiterapia procede del griego brachys que significa «cerca». También llamada curiterapia, es una forma de tratamiento radio terapéutico donde isótopos radioactivos se colocan dentro o cerca de la zona que requiere tratamiento. La braquiterapia es comúnmente usada como un tratamiento eficaz para el cáncer de cérvix, próstata, mama y piel y también se puede usar para tratar tumores en muchos otros sitios del cuerpo. La braquiterapia se puede utilizar sola o en combinación con otras terapias como la cirugía, la radioterapia externa y la quimioterapia.",
      slug: "braquiterapia",
    },
    // {
    //   icon: "fa-desktop",
    //   name: "Informática",
    //   img: "",
    //   description: "",
    //   slug: "informatica",
    // },
    {
      icon: "fa-brain",
      name: "Psicología",
      img: "",
      description:
        "La psicología es, a la vez, una profesión, una disciplina académica y una ciencia que trata el estudio y el análisis de la conducta y los procesos mentales de los individuos y de grupos humanos en distintas situaciones, cuyo campo de estudio abarca todos los aspectos de la experiencia humana y lo hace para fines tanto de investigación como docentes y laborales, entre otros. Existen diversas perspectivas psicológicas, cada una con sus propias teorías y metodologías, y en comparativa pueden coincidir, influirse, solaparse o incluso ser contradictorias e incompatibles; esta variedad da pie a múltiples acepciones y abordajes. Algunos enfoques —como en el humanismo— consideran que el método científico no es adecuado para investigar la conducta; otros tales como el conductismo lo emplean para comportamientos observables que pueden ser objetivamente medidos.",
      slug: "psicologia",
    },
    // {
    //   icon: "fa-people-group",
    //   name: "Trabajo social",
    //   img: "",
    //   description: "",
    //   slug: "trabajo-social",
    // },
    {
      icon: "fa-syringe",
      name: "Sala de Quimioterapia",
      img: "",
      description:
        "Con equipo y personal especializado en la aplicación de antineoplásicos, con gabinete de seguridad clase III, laboratorio integrado y sillas relajantes.",
      slug: "sala-de-quimioterapia",
    },
    {
      icon: "fa-bed",
      name: "Sala de cuidados paliativos",
      img: "",
      description:
        "Medicina paliativa es la especialidad médica que centra su atención en los enfermos terminales, es decir, aquellos cuya expectativa de vida es relativamente corta por causa de una enfermedad que no responde a los tratamientos curativos. Está enfocada en lograr la máxima calidad de vida y actividad en los pacientes terminales, sin intentar acortar ni alargar la vida, procurando el alivio del dolor y otros síntomas estresantes. Además, integra los aspectos psicológicos y espirituales en la aplicación de los cuidados, considerando activamente a la familia del paciente, tanto durante el proceso como en el duelo. Los cuidados paliativos incluyen no sólo los tratamientos médicos y farmacológicos que se dan a los pacientes terminales, sino que también todas las atenciones del equipo interdisciplinario: psicológicas, de enfermería, sociales, de terapia ocupacional y pastorales. Los cuidados paliativos no adelantan ni retrasan la muerte, sino que constituyen un verdadero sistema de apoyo y soporte integral para el paciente y su familia.",
      slug: "sala-de-cuidados-paliativos",
    },
    {
      icon: "fa-microscope",
      name: "Acelerador lineal ELEKTA SYNERGY",
      img: "",
      description:
        "Un acelerador lineal, muchas veces llamado linac por las primeras sílabas de su nombre en inglés (linear accelerator) es un dispositivo eléctrico para la aceleración de partículas que posean carga eléctrica, tales como los electrones, positrones, protones o iones. La aceleración se produce por incrementos, al atravesar las partículas una secuencia de campos eléctricos alternos.",
      slug: "acelerador-lineal-elekta-synergy",
    },
    {
      icon: "fa-venus",
      name: "Estudios Ginecológicos",
      img: "",
      description:
        "La colposcopia  es un procedimiento ginecológico que consiste en la exploración del cuello uterino. Se realiza, generalmente, para evaluar a la paciente con resultados anormales en la prueba de Papanicolaou o citología cervical. El colposcopio es una especie de telescopio binocular de enfoque próximo que permite al médico ver con detalle regiones anormales del cuello uterino, a través de la vagina, por lo que es posible extraer una biopsia del área anormal y enviarla al patólogo. La biopsia permite confirmar el diagnóstico antes de efectuar el tratamiento definitivo. Para visualizar las paredes de la vagina y del cuello uterino, se introduce un espéculo que abre las paredes de la vagina y se limpia la mucosa con una dilución de ácido acético. Se pueden utilizar diferentes colorantes como lugol y distintos tipos de luz para diferenciar la mucosa normal de la patológica.",
      slug: "estudios-ginecologicos",
    },
    // {
    //   icon: "fa-chart-line",
    //   name: "Registro y estadísticas de cáncer",
    //   img: "",
    //   description: "",
    //   slug: "registro-y-estadisticas-de-cancer",
    // },
    // {
    //   icon: "fa-wave-square",
    //   name: "Física médica",
    //   img: "",
    //   description: "",
    //   slug: "fisica-medica",
    // },
  ];

  return { departments, currentDepartment, handleCurrentDepartment };
});
