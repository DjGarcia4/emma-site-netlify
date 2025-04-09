import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores/app";
import { ref } from "vue";

export const useBlogStore = defineStore("blog", () => {
  const router = useRouter();
  const currentBlog = ref({});
  const appStore = useAppStore();

  const handleCurrentBlog = (blog) => {
    currentBlog.value = blog;
  };
  const blogs = [
    {
      image: "/src/assets/imgs/blog/1.jpg",
      date: "08/03/2019",
      title:
        "Luchadora del cáncer: “Admiré mis senos en el espejo por última vez y lloré”",
      description:
        "Esta vez la Mujer Maravilla no llegó con su traje típico de capa y con su escudo, sino con un pantalón negro, una camisa rosa y con algo que le hacia más poderosa que su escudo: una peluca color negro.La Mujer Maravilla que les habló se llama Ermila Nohemy Baca Aguirre, tiene 31 años, se encuentra casada con Jorge Luis Martínez, y tiene dos hijas a las que ama con todo su ser: Zoe Marcela de siete años y Ariana Sofía de tres.Su batalla la comenzó el 17 de abril del 2017 cuando fue diagnosticada con carcinoma Ductal invasivo (cáncer de mama) etapa II.  “En ese momento me di cuenta que el único requisito para tener cáncer es estar vivo”, dice Ermila.  Estamos acostumbrados a ver en los anuncios que una mamografía se tiene que hacer hasta los 35 años y eso hasta cierto punto nos crea la idea que antes de esa edad es imposible que nos dé esa enfermedad.En el caso de Ermila fue diferente, al descubrirse una bolita en una de sus mamas en diciembre del año pasado. “Siempre fui de las personas que se realizaba el auto-examen, así que conocí a la perfección mis mamas y fue en diciembre que descubrí una bolita, pero como era fiestas de Navidad tenía miedo de el resultado y no quería arruinar las fiestas”, dice Ermila.",
    },
    {
      image: "/src/assets/imgs/blog/2.png",
      date: "07/03/2019",
      title: "Signos y síntomas del cáncer",
      description:
        "Los signos y los síntomas son ambos señales de lesión, enfermedad o dolencia: señales de que algo no está bien en el cuerpo. Un signo es una señal que puede ser vista por otra persona, tal vez un ser querido, un doctor, enfermera u otro profesional de atención médica. Por ejemplo, fiebre, respiración acelerada y sonidos anormales de los pulmones que se escuchan a través de un estetoscopio puede que sean signos de una pulmonía. Por otro lado, un síntoma es una señal que la persona que lo experimenta siente o nota, aunque puede que otras personas no la noten fácilmente. Por ejemplo, debilidad, dolor muscular, y dificultad para respirar puede que sean síntomas de una pulmonía. El cáncer es un grupo de enfermedades que pudiera causar casi cualquier signo o síntoma. Los signos y síntomas dependerán de la localización del cáncer, cuán grande es, así como de qué tanto afecta a los órganos o los tejidos. Si un cáncer se propaga (hace metástasis), entonces los signos o síntomas pudieran aparecer en diferentes partes del cuerpo. A medida que el cáncer crece, éste comienza a ejercer presión en los órganos cercanos, vasos sanguíneos y los nervios. Esta presión ocasiona algunos de los signos y síntomas del cáncer. Si el cáncer se encuentra en un área crítica, como en ciertas partes del cerebro, aun el tumor más pequeño puede causar síntomas de la enfermedad. Pero en ocasiones el cáncer surge en lugares donde no causará ningún signo o síntoma hasta que ha crecido en gran tamaño. Por ejemplo, los cánceres de páncreas usualmente no causan síntomas sino hasta que han crecido lo suficiente como para presionar los nervios u órganos cercanos (esto ocasiona dolor de espaldas o de abdomen)",
    },
    {
      image: "/src/assets/imgs/blog/3.jpg",
      date: "01/03/2019",
      title:
        "¡Porque juntos somos más! Mazola apoya la lucha contra el Cáncer de Mama",
      description:
        "Como parte de su compromiso con la salud y bienestar, Mazola lanzó por segundo año consecutivo la campaña “Con tu compra apoyamos la lucha contra el Cáncer de Mama”. Consiste en el lanzamiento de sus productos con distintivo rosa en las presentaciones de Aceite Mazola de 443 ml, 750 ml, 32 oz y galón, de los cuales se destinará un porcentaje de la venta al Centro de Cáncer Emma Romero de Callejas, (CCERC), que desde hace 25 años contribuye con la salud de la población hondureña, ofreciendo servicios médicos de alta tecnología en detección temprana y tratamiento de cáncer. “Con esta campaña se busca sensibilizar y concienciar a todas las mujeres sobre la importancia de la detección temprana de esta enfermedad, que es una de las que tiene mayor incidencia en la población mundial”, dijo el gerente de marca Mazola, Fabricio Ochoa. Mazola junto al CCERC realizarán una brigada médica a beneficio de las colaboradoras de la empresa Dinant, a las que se ofrece mamografías, ultrasonidos y citologías; así como apoyo gráfico para educación sobre la detección temprana. Finalmente, el representante de Mazola invitó a toda la población hondureña a que contribuya a formar parte de esta iniciativa al adquirir estos productos en los diferentes puntos de venta: supermercados, mayoreo, tiendas de conveniencia y pulperías. Artículo  tomado de  Radiohouse ",
    },
    {
      image: "/src/assets/imgs/blog/4.avif",
      date: "03/02/2019",
      title: "¿Qué es el cáncer de mama?",
      description:
        "El cáncer de mama es una enfermedad en la cual las células de la mama se multiplican sin control. Existen distintos tipos de cáncer de mama. El tipo de cáncer de mama depende de qué células de la mama se vuelven cancerosas. El cáncer de mama puede comenzar en distintas partes de la mama. Las mamas constan de tres partes principales: lobulillos, conductos y tejido conectivo. Los lobulillos son las glándulas que producen leche. Los conductos son los tubos que transportan la leche al pezón. El tejido conectivo (formado por tejido fibroso y adiposo) rodea y sostiene todas las partes de la mama. La mayoría de los cánceres de mama comienzan en los conductos o en los lobulillos. El cáncer de mama puede diseminarse fuera de la mama a través de los vasos sanguíneos y los vasos linfáticos. Cuando el cáncer de mama se disemina a otras partes del cuerpo, se dice que ha hecho metástasis.",
    },
    {
      image: "/src/assets/imgs/blog/5.avif",
      date: "03/12/2018",
      title: "Cómo prevenir el cáncer de mama",
      description:
        "El cáncer de mama no se puede prevenir, sin embargo estudios recientes parecen demostrar que el riesgo de padecer cáncer de mama se puede reducir realizando ejercicio físico de forma regular (al menos 4 horas a la semana), evitando el sobrepeso  y la obesidad tras la menopausia  y el consumo regular de alcohol. Además, se ha podido demostrar mediante estudios epidemiológicos, que el uso de tratamientos hormonales sustitutivos durante la menopausia se asocia a un incremento del riesgo de padecer cáncer de mama. El descenso de número de mujeres que reciben este tipo de tratamientos sustitutivos ha coincidido con un descenso proporcional en el número de casos nuevos de cáncer de mama. Por tanto: Evite el tratamiento hormonal sustitutivo tras la menopausia. Si existe una historia familiar de cáncer de mama es conveniente que se pida Consejo genético, que permitirá determinar si se asocia con una mutación genética (BRAC1, BRAC2). en mujeres con riesgo muy elevado de desarrollar cáncer de mama existen varias opciones terapéuticas. La paciente, junto con su médico debe valorar las ventajas e inconvenientes de cada una de ellas y decidir qué opción es la más adecuada, las posibilidades terapéuticas son las revisiones frecuentes la mastectomía profiláctica y la quimioprevención.",
    },
  ];

  return { blogs, currentBlog, handleCurrentBlog };
});
