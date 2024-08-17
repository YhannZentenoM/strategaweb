export interface Root {
    topNav: TopNav
    slider: Slider[]
    purposes: Purpose[]
    purposesOptions: PurposesOption[]
    categoriesClient: CategoriesClient[]
    testimonials: Testimonial[]
    consultancy: Consultancy[]
    workshops: Workshop[]
    programs: Program[]
    responsability: Responsability[]
    publications: Publication[]
    coursesPay: CoursesPay[]
    equipo: Equipo[]
  }
  
  export interface TopNav {
    schedules: string
    phone: string
    email: string
    address: string
    profiles: Profile[]
  }
  
  export interface Profile {
    network: string
    username: string
    url: string
  }
  
  export interface Slider {
    title: string
    imagen: string
    url: string
  }
  
  export interface Purpose {
    title: string
    total: number
    velocity: number
    icon: string
  }
  
  export interface PurposesOption {
    title: string
    total: number
    velocity: number
    icon: string
  }
  
  export interface CategoriesClient {
    title: string
    clients: Client[]
  }
  
  export interface Client {
    id: string
    name: string
  }
  
  export interface Testimonial {
    name: string
    role: string
    country: string
    image: string
    title: string
    text: string
  }
  
  export interface Consultancy {
    id: string
    title: string
    description: string
  }
  
  export interface Workshop {
    id: string
    title: string
    description: string
  }
  
  export interface Program {
    id: string
    title: string
    description: string
  }
  
  export interface Responsability {
    id: string
    title: string
    description: string
  }
  
  export interface Publication {
    id: string
    medio: string
    title: string
  }

  export interface CoursesPay {
    id: string
    title: string
  }
  
  export interface Equipo {
    id: string
    nombre: string
    cargo: string
    imagen: string
    cuerpo: string
    orden: number
    slug: string
  }