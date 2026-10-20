export const CHURCH = {
  name: 'IACYM Nuevo Retablo',
  fullName: 'Iglesia Alianza Cristiana y Misionera Nuevo Retablo',
  tagline: 'Una comunidad dedicada a amar a Dios, crecer en Su Palabra y servir con propósito.',
  address: 'Nuevo Retablo, Comas, Lima, Perú',
  addressDetail: 'Jr. Los Olivos 247, Nuevo Retablo, Comas, Lima, Perú',
  phone: '+51 987 654 321',
  whatsapp: '51987654321',
  email: 'contacto@iacymnuevoretablo.pe',
  facebook: 'https://facebook.com/iacymnuevoretablo',
  youtube: 'https://youtube.com/@iacymnuevoretablo',
  liveStream: 'https://youtube.com/@iacymnuevoretablo/streams',
  mapsQuery: 'Nuevo+Retablo+Comas+Lima+Peru',
};

export interface ServiceTime {
  id: string;
  title: string;
  day: string;
  time: string;
  mode: ('Presencial' | 'En Vivo')[];
  description: string;
  icon: string;
}

export const SERVICES: ServiceTime[] = [
  {
    id: 'domingo-manana',
    title: 'Culto Dominical — Mañana',
    day: 'Domingo',
    time: '10:00 AM',
    mode: ['Presencial', 'En Vivo'],
    description: 'Culto de adoración y enseñanza para toda la familia. Escuela Dominical para niños en paralelo.',
    icon: 'sunrise',
  },
  {
    id: 'domingo-tarde',
    title: 'Culto Dominical — Noche',
    day: 'Domingo',
    time: '6:00 PM',
    mode: ['Presencial', 'En Vivo'],
    description: 'Reunión vespertina de alabanza, comunión y mensaje desde la Palabra.',
    icon: 'sunset',
  },
  {
    id: 'oracion',
    title: 'Reunión de Oración',
    day: 'Miércoles',
    time: '7:30 PM',
    mode: ['Presencial', 'En Vivo'],
    description: 'Un espacio para buscar a Dios juntos, interceder por la iglesia y crecer en intimidad con Él.',
    icon: 'hand',
  },
  {
    id: 'jovenes',
    title: 'Reunión de Jóvenes y Adolescentes',
    day: 'Sábado',
    time: '6:00 PM',
    mode: ['Presencial'],
    description: 'Un punto de encuentro para jóvenes y adolescentes: juegos, enseñanza, alabanza y amistad.',
    icon: 'users',
  },
];

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  level: 'Inicial' | 'Intermedio' | 'Avanzado';
  audience: 'General' | 'Adultos' | 'Jóvenes' | 'Niños';
}

export const COURSES: Course[] = [
  {
    id: 'vida-abundante',
    title: 'Vida Abundante',
    description: 'Descubre el propósito de Dios para tu vida y cómo vivirlo en plenitud. Un primer paso para todo nuevo creyente.',
    duration: '8 semanas',
    schedule: 'Domingos 8:30 AM',
    level: 'Inicial',
    audience: 'General',
  },
  {
    id: 'estudiar-biblia',
    title: '¿Cómo estudiar la Biblia?',
    description: 'Aprende métodos prácticos para leer, interpretar y aplicar la Palabra en tu vida diaria.',
    duration: '6 semanas',
    schedule: 'Miércoles 6:00 PM',
    level: 'Inicial',
    audience: 'General',
  },
  {
    id: 'panorama-biblico',
    title: 'Panorama Bíblico',
    description: 'Recorre la historia de la redacción desde Génesis hasta Apocalipsis y comprende el hilo de salvación.',
    duration: '12 semanas',
    schedule: 'Domingos 8:30 AM',
    level: 'Intermedio',
    audience: 'Adultos',
  },
  {
    id: 'doctrina-basica',
    title: 'Doctrina Básica',
    description: 'Fundamentos de la fe cristiana: Dios, la salvación, la iglesia y las ordenanzas.',
    duration: '10 semanas',
    schedule: 'Domingos 8:30 AM',
    level: 'Inicial',
    audience: 'Adultos',
  },
  {
    id: 'lideres-marcos',
    title: 'Cursos para Líderes — Marcos',
    description: 'Formación de servidores y líderes: carácter, servicio, mayordomía y conducción de ministerios.',
    duration: '16 semanas',
    schedule: 'Sábados 4:00 PM',
    level: 'Avanzado',
    audience: 'Adultos',
  },
];

export interface Ministry {
  id: string;
  title: string;
  description: string;
  audience: 'Niños' | 'Jóvenes' | 'Adultos' | 'General';
  icon: string;
}

export const MINISTRIES: Ministry[] = [
  {
    id: 'ninos',
    title: 'Niños / Escuela Dominical',
    description: 'Enseñanza bíblica creativa para los más pequeños, con juegos, cantos y actividades que acercan a los niños al amor de Jesús.',
    audience: 'Niños',
    icon: 'baby',
  },
  {
    id: 'jovenes',
    title: 'Jóvenes',
    description: 'Un espacio para crecer, hacer amistades y vivir la fe con pasión. Actividades, retiros y servicio.',
    audience: 'Jóvenes',
    icon: 'flame',
  },
  {
    id: 'damas',
    title: 'Sociedad de Damas',
    description: 'Comunidad de mujeres que se reúnen para estudiar la Palabra, orar y apoyarse mutuamente.',
    audience: 'Adultos',
    icon: 'heart',
  },
  {
    id: 'varones',
    title: 'Sociedad de Varones',
    description: 'Hermandad de hombres comprometidos con su fe, su familia y su servicio a la iglesia.',
    audience: 'Adultos',
    icon: 'shield',
  },
  {
    id: 'alabanza',
    title: 'Alabanza y Medios',
    description: 'El equipo que lidera la adoración musical y el soporte técnico (audio, video, redes) en cada reunión.',
    audience: 'General',
    icon: 'music',
  },
  {
    id: 'accion-social',
    title: 'Acción Social y Discipulado',
    description: 'Llevamos el amor de Cristo a nuestra comunidad con obras concretas y acompañamiento personal.',
    audience: 'General',
    icon: 'hands',
  },
];
