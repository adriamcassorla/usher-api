import { Event, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import filteredShows from './mocks/mockShows'

async function main() {
  
  // const venues = await prisma.venue.createMany({
  //   data: [
  //     {
  //       "id": "a4f898f1-0b5c-456f-be1c-31b46b7468e3",
  //       "name": "Teatre Goya",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-goya",
  //       "address": "Carrer Joaquín Costa, 68",
  //       "zipcode": "08001",
  //       "city": "Barcelona",
  //         "latitude": 41.384117,
  //         "longitude": 2.164164,
  //       "promoter_id": 1
  //     },
  //     {
  //         "id": "96751b11-e5e1-49d2-adc3-b15a9a98ff90",
  //       "name": "Teatre Tívoli",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-tivoli",
  //       "address": "Carrer Casp, 8",
  //       "zipcode": "08010",
  //       "city": "Barcelona",
  //         "latitude": 41.388997, 
  //         "longitude": 2.170266,
  //       "promoter_id": 1
  //     },
  //     {
  //         "id": "4c415c71-6214-4573-a8c5-d1c39e16e994",
  //       "name": "Teatre Victòria",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-victoria",
  //       "address": "Avinguda Paral·lel, 67",
  //       "zipcode": "08004",
  //       "city": "Barcelona",
  //         "latitude": 41.374883, 
  //         "longitude": 2.168788,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "1e3d4519-75ed-4932-b9f6-9a0551ecdaf0",
  //       "name": "Teatre Coliseum",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-coliseum",
  //       "address": "Gran Via de les Corts Catalanes, 595",
  //       "zipcode": "08007",
  //       "city": "Barcelona",
  //         "latitude": 41.388152, 
  //         "longitude": 2.166223,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "3a4ec450-727e-45bf-bc0b-87a4532afb08",
  //       "name": "La Villaroel",
  //       "external_url": "https://es.teatrebarcelona.com/la-villarroel",
  //       "address": "Carrer Villarroel, 87",
  //       "zipcode": "08011",
  //       "city": "Barcelona",
  //         "latitude": 41.384580, 
  //         "longitude": 2.157544,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "3726bbe6-cc81-4363-96b1-e3e0942db9f3",
  //       "name": "Teatre Borras",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-borras",
  //       "address": "Plaça Urquinaona, 9",
  //       "zipcode": "08010",
  //       "city": "Barcelona",
  //         "latitude": 41.388919, 
  //         "longitude": 2.173625,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "8b3ddca0-3c3c-4361-b276-94ff1bbb9731",
  //       "name": "La 9 del Bosque",
  //       "external_url": "https://es.teatrebarcelona.com/cinemes-bosque",
  //       "address": "Rambla de Prat, 16",
  //       "zipcode": "08012",
  //       "city": "Barcelona",
  //         "latitude": 41.401413,
  //         "longitude": 2.151920,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "c00a49d0-1cd6-4a23-9df5-2a6aab4e2b82",
  //       "name": "Aquitània Teatre",
  //       "external_url": "https://es.teatrebarcelona.com/aquitania-teatre",
  //       "address": "Avinguda de Sarrià, 33",
  //       "zipcode": "08029",
  //       "city": "Barcelona",
  //         "latitude": 41.3901,
  //         "longitude": 2.1448, 
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "50bf72c2-0e65-42b2-80f9-bb3d76a7e36d",
  //       "name": "Teatre Lliure - Montjuïc",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-lliure-montjuic",
  //       "address": "Pg. Santa Madrona, 40",
  //       "zipcode": "08038",
  //       "city": "Barcelona",
  //         "latitude": 41.3705,
  //         "longitude": 2.1573,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "e3f3d6c3-ae64-4add-8819-b050c0e2243c",
  //       "name": "Teatre Poliorama",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-poliorama",
  //       "address": "La Rambla, 115",
  //       "zipcode": "08002",
  //       "city": "Barcelona",
  //         "latitude": 41.384149,
  //         "longitude": 2.170826,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "450afdde-1a91-4af2-af5e-df464546e686",
  //       "name": "Teatre Condal",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-condal",
  //       "address": "Avinguda Paral·lel, 91",
  //       "zipcode": "08004",
  //       "city": "Barcelona",
  //         "latitude": 41.3748,
  //         "longitude": 2.1646,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "ae33dd6d-c879-4837-a9f4-c1c56ce7b0c7",
  //       "name": "Teatre Eòlia",
  //       "external_url": "https://es.teatrebarcelona.com/teatre-eolia",
  //       "address": "Carrer Bailén 23",
  //       "zipcode": "08010",
  //       "city": "Barcelona",
  //         "latitude": 41.3926,
  //         "longitude": 2.1762,
  //       "promoter_id": 1
    
  //     },
  //     {
  //       "id": "095b1910-1c20-41e6-a7a3-88cb0bd1bc7a",
  //       "name": "Carpa Blanca Cirque du Soleil",
  //       "external_url": "https://es.teatrebarcelona.com/carpa-blanca-cirque-du-soleil",
  //       "address": "Travessia Industrial, al lado del Estadi Municipal",
  //       "zipcode": "08907",
  //       "city": "Barcelona",
  //         "latitude": 41.3901,
  //         "longitude": 2.1448,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "6a629624-bc48-4bb4-a6d5-aafc590f4708",
  //       "name": "Teatre Romea",
  //       "external_url": "https://www.teatrebarcelona.com/teatre-romea",
  //       "address": "Carrer Hospital, 51",
  //       "zipcode": "08001",
  //       "city": "Barcelona",
  //         "latitude": 41.380643,
  //         "longitude": 2.171056,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "bf186e78-df61-443a-94fe-48b7f4ede8cb",
  //       "name": "La Gleva Teatre",
  //       "external_url": "https://www.teatrebarcelona.com/la-gleva-teatre",
  //       "address": "La Gleva, 19",
  //       "zipcode": "08006",
  //       "city": "Barcelona",
  //         "latitude": 41.403178,
  //         "longitude": 2.146105,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "10ea225d-1a65-44b6-b214-f1760f75786c",
  //       "name": "Teatre Apolo",
  //       "external_url": "https://www.teatrebarcelona.com/teatre-apolo",
  //       "address": "Avinguda Paral·lel, 59",
  //       "zipcode": "08004",
  //       "city": "Barcelona",
  //         "latitude": 41.3747, 
  //         "longitude": 2.1705,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "ba38d5f1-62e8-4869-b403-8931e376afa3",
  //       "name": "Golem's (Almeria Teatre)",
  //       "external_url": "https://www.teatrebarcelona.com/almeria-teatre",
  //       "address": "Carrer Sant Lluís, 64",
  //       "zipcode": "08024",
  //       "city": "Barcelona",
  //         "latitude": 41.40612272904128,
  //         "longitude": 2.1613402149534533,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "47828ac3-db61-4941-b223-337448a4fe3d",
  //       "name": "TNC - Teatre Nacional de Catalunya",
  //       "external_url": "https://www.teatrebarcelona.com/tnc-teatre-nacional-de-catalunya",
  //       "address": "Plaça de les Arts, 1",
  //       "zipcode": "08013",
  //       "city": "Barcelona",
  //         "latitude": 41.40026887762266,
  //         "longitude": 2.185354184340852,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "6e41c184-c1e9-4117-803c-bc30f6afac1c",
  //       "name": "Antic Teatre",
  //       "external_url": "https://www.teatrebarcelona.com/antic-teatre",
  //       "address": "Verdaguer i Callís, 12",
  //       "zipcode": "08003",
  //       "city": "Barcelona",
  //         "latitude": 41.38715779717535,
  //         "longitude": 2.1758773942649765,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "a85a66c4-8270-4ece-9bce-1ebfceb474d4",
  //       "name": "Sala Beckett",
  //       "external_url": "https://www.teatrebarcelona.com/sala-beckett",
  //       "address": "Pere IV, 228-232",
  //       "zipcode": "08005",
  //       "city": "Barcelona",
  //         "latitude": 41.40472605475109,
  //         "longitude": 2.199387265387497,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "a9ee89d5-93bd-418f-9e35-8de015411205",
  //       "name": "Sala Atrium",
  //       "external_url": "https://www.teatrebarcelona.com/sala-atrium",
  //       "address": "Carrer Consell de Cent, 435",
  //       "zipcode": "08009",
  //       "city": "Barcelona",
  //         "latitude": 41.39723475956503, 
  //         "longitude": 2.173836370157251,
  //       "promoter_id": 1
    
  //     },
  //     {
  //         "id": "8561774a-a92b-4019-9404-332377aea1c4",
  //       "name": "Versus Glòries",
  //       "external_url": "https://www.teatrebarcelona.com/versus-glories",
  //       "address": "Carrer Castillejos, 179",
  //       "zipcode": "08013",
  //       "city": "Barcelona",
  //         "latitude": 41.402127345023914,
  //         "longitude": 2.184025118481931,
  //       "promoter_id": 1
    
  //     }
  //   ]
    
  // })

//   const events = await prisma.event.createMany({
//     data: [
//   {
//     "name": "ESCAPE ROOM",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/joel-joan-i-hector-claramunt-escape-room?funcio_id=244460",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2018/07/TEATRE-BARCELONA-escaperoom-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2020/10/TEATRE-BARCELONA-TEATRE-GOYA-ESCAPE-ROOM.jpg",
//     "venue_id": "a4f898f1-0b5c-456f-be1c-31b46b7468e3",
//     "duration": 90,
//     "description": "Escape Room una comedia de Joel Joan y Héctor Claramunt donde dos parejas ponen a prueba su amistad cuando participan en este popular juego. Con Xavi Mira, Paula Vives, Biel Duran y Míriam Tortosa. ",
//     "genres": [
//       "Comedia",
//       "Thriller"
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "CANTANDO BAJO LA LLUVIA, EL MUSICAL",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/cantando-bajo-la-lluvia-el-musical?funcio_id=233293",
//     "price": 23,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2020/07/TEATRE-BARCELONA-cantando-bajo-la-lluvia-0-b.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2020/07/TEATRE-BARCELONA-cantandobajolalluvia.jpg",
//     "venue_id": "96751b11-e5e1-49d2-adc3-b15a9a98ff90",
//     "duration": 150,
//     "description": "Àngel Llàcer y Manu Guix llevan al Teatre Tívoli la gran comèdia musical Cantando bajo la lluvia. Vuelven de la mano de la productora Nostromo Live, artífice de los éxitos La jaula de las locas y La Tienda de los Horrores, y las coreografias de Myriam Benedited. Juntos pondrán sobre el escenario a más de 30 actores y bailarines, una escenografía espectacular, un vestuario impresionante  y unas coreografías que no dejarán indiferente a nadie. ¡Una propuesta imprescindible para grandes y pequeños, parejas y grupos de amigos!",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "BILLY ELLIOT. EL MUSICAL",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/billy-elliot-el-musical?funcio_id=150875",
//     "price": 27,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/01/PRINCIPALTEATRE-BARCELONA-billy_elliot_el_musical_tivoli.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2019/01/CARTELLTEATRE-BARCELONA-billy_elliot_teatre_victoria.jpg",
//     "venue_id": "4c415c71-6214-4573-a8c5-d1c39e16e994",
//     "duration": 0,
//     "description": "Billy Elliot. El Musical, llega a el Teatro Victòria de Barcelona tras once temporadas de gran éxito en Londres, cuatro a Broadway y tres en Madrid.",
//     "genres": [
//       "Comedia",
//       "Drama",
//       "Tragicomedia"
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "EL MAGO POP: NADA ES IMPOSIBLE",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/el-mago-pop-nada-es-imposible?funcio_id=156643",
//     "price": 29,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/02/PRINCIPALTEATRE-BARCELONA-mago_pop_nada_es_impossible_victoria.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2019/02/CARTELLTEATRE-BARCELONA-mago_pop_nada_es_impossible_magia_el_teatre_victoria_antonio_diaz.jpg",
//     "venue_id": "4c415c71-6214-4573-a8c5-d1c39e16e994",
//     "duration": 90,
//     "description": "***Entradas desde 29 €: precio mínimo garantizado***",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "LA CUBANA: ADÉU, ARTURO",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/la-cubana-adios-arturo?funcio_id=150472",
//     "price": 23,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/01/PRINCIPALTEATRE-BARCELONA-ADIOS_ARTURO_LA_CUBANA_BARCELONA.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2019/01/TEATRE-BARCELONA-Adeu-arturo.jpg",
//     "venue_id": "1e3d4519-75ed-4932-b9f6-9a0551ecdaf0",
//     "duration": 120,
//     "description": "Adiós, Arturo es un canto a la vida y de cómo hay que vivirla intensamente, dejando en evidencia todas las convenciones sociales y “las tonterías” que nos dificultan el poder hacerlo. Una loca comedia, con toques surreales y que, como siempre, estará aliñada con las cosas que nos caracterizan y al más puro estilo La Cubana: con participación del público, sorpresas y mucho humor.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "A.K.A. (ALSO KNOWN AS)",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/k-also-known-as?funcio_id=239844",
//     "price": 22,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2017/08/TEATRE-BARCELONA-Aka-0-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2020/09/TEATRE-BARCELONA-Aka-VILLARROEL-1.jpg",
//     "venue_id": "3a4ec450-727e-45bf-bc0b-87a4532afb08",
//     "duration": 80,
//     "description": "El espectáculo multipremiado A.K.A (Also Known AS) ahora en La Villarroel. Un monólogo escrito por Daniel J. Meyer, protagonizado por Lluís Febrer y dirigido por Montse Rodríguez Clusella.",
//     "genres": [
//       "Drama"
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "FOREVER. THE BEST SHOW ABOUT THE KING OF POP",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/forever-the-best-show-about-the-king-of-pop?funcio_id=279929",
//     "price": 22,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2018/01/PRINCIPALTEATRE-BARCELONA-FOREVER_KING_OF_POP.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/12/foreverpop400x570.png",
//     "venue_id": "1e3d4519-75ed-4932-b9f6-9a0551ecdaf0",
//     "duration": 130,
//     "description": "Forever. The best show about The King of Pop, es el espectáculo oficial de la Jackson Family Foundation. Con más de 20 artistas en escena, vivirás un intenso recorrido por los mayores éxitos del Rey del Pop, con nuevas coreografías y una puesta en escena sorprendente e impresionante.",
//     "genres": [
//       "Fotos"
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "QUIM MASFERRER: BONA GENT",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/quim-masferrer-bona-gent?funcio_id=280808",
//     "price": 22,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2018/08/TEATRE-BARCELONA-Bona_gent-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2018/08/TEATRE-BARCELONA-Quim_Masferrer_Bona_gent.jpg",
//     "venue_id": "4c415c71-6214-4573-a8c5-d1c39e16e994",
//     "duration": 105,
//     "description": "Un homenaje al público. Esto es lo que el conocido presentador del programa de TV3 El Foraster, Quim Masferrer, tiene el objetivo de hacer con el espectáculo Bona Gent.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "OVELLES",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/ovelles?funcio_id=283562",
//     "price": 16,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2017/08/TEATRE-BARCELONA-Ovelles-0-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/02/TEATRE-BARCELONA-ovelles.jpg",
//     "venue_id": "3726bbe6-cc81-4363-96b1-e3e0942db9f3",
//     "duration": 80,
//     "description": "¿Qué harías si heredas un rebaño de 512 ovejas en un pueblo alejado de toda civilización urbana?",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "MIGUEL NOGUERA: ULTRASHOW",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/ultrashow-miguel-noguer?funcio_id=61228",
//     "price": 13,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2013/06/ultrashow-miguel-noguera-teatre-barcelona.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2017/09/TEATRE-BARCELONA-Miguel-Noguera-Ultrasho-GOYA.jpg",
//     "venue_id": "a4f898f1-0b5c-456f-be1c-31b46b7468e3",
//     "duration": 65,
//     "description": "El inclasificable humorista Miguel Noguera presenta su monólgo Ultrashow en la sesiones del viernes del Teatro Goya.",
//     "genres": [
//       "Fotos"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "BRUNO ORO: ¿SI O NO?",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/bruno-oro-si-o-no?funcio_id=273981",
//     "price": 18,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/TEATRE-BARCELONA-bruno-oro-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/TEATRE-BARCELONA-bruno-oro-si-o-no.jpg",
//     "venue_id": "8b3ddca0-3c3c-4361-b276-94ff1bbb9731",
//     "duration": 90,
//     "description": "Bruno Oro inaugura LA 9 del BOSQUE con Si o no? una historia absolutamente divertida que apela a perderse.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "CARLES SANS: PER FI SOL",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/carles-sans-per-fi-sol?funcio_id=282652",
//     "price": 22,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2020/10/GALERIATEATRE-BARCELONA-carles-sans-per-fi-sol-1-720x480-5.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/02/TEATRE-BARCELONA-carlessans-per-fi-sol.jpg",
//     "venue_id": "3726bbe6-cc81-4363-96b1-e3e0942db9f3",
//     "duration": 85,
//     "description": "Carles Sans, miembro del gran trío El Tricicle, sube solo al escenario con Por fi sol! (Por fin solo!) , una comedia donde nos desvelará secretos, anécdotas y batallitas vividas durante todos sus años de carrera profesional.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "CORBACHO: ANTE TODO MUCHA CALMA",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/corbacho-ante-todo-mucha-calma?funcio_id=278112",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2018/10/PRINCIPALTEATRE-BARCELONA-jose_corbacho_ante_todo_mucha_calma.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/11/TEATRE-BARCELONA-jose-corbacho.jpg",
//     "venue_id": "3726bbe6-cc81-4363-96b1-e3e0942db9f3",
//     "duration": 80,
//     "description": "Corbacho vuelve a Barcelona, para seguir riendo de todo un poco con la tercera temporada de su espectáculo Ante Todo Mucha Calma.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "EL GRAN COMEDIANT",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/joel-joan-el-gran-comediant?funcio_id=271561",
//     "price": 19,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/08/GALERIATEATRE-BARCELONA-el_gran_comediant_0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/TEATRE-BARCELONA-goya-el-gran-comediant.jpg",
//     "venue_id": "a4f898f1-0b5c-456f-be1c-31b46b7468e3",
//     "duration": 110,
//     "description": "El Teatro Goya acoge El gran comediant, la nueva comedia de Joel Joan y Héctor Claramunt, los autores de Escape Room, El Padre de la Novia o El crack de TV3. Xavi Mira, Sandra Monclús, África Alonso, Eduard Muntada acompañan a Joel Joan en esta nueva aventura cómica.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "EL SOPAR DELS IDIOTES",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/el-sopar-dels-idiotes?funcio_id=278272",
//     "price": 17,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/11/TEATRE-BARCELONA-el-sopar-dels-idiotes-0-2.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/11/TEATRE-BARCELONA-el-sopar-dels-idiotes-2.jpg",
//     "venue_id": "3726bbe6-cc81-4363-96b1-e3e0942db9f3",
//     "duration": 100,
//     "description": "El sopar dels idiotes, de Francis Veber, es una comedia divertida y original que se ha convertido en uno de los clásicos del humor más representados con éxito en todo el mundo.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "JOAN PERA: MASTER XOF",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/joan-pera-master-xof?funcio_id=283130",
//     "price": 24,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/12/TEATRE-BARCELONA-MASTER-XOF-0-2.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/02/TEATRE-BARCELONA-TEATRE-GOYA-MASTER-XOF.jpg",
//     "venue_id": "a4f898f1-0b5c-456f-be1c-31b46b7468e3",
//     "duration": 0,
//     "description": "Joan Pera nos presenta una comedia culinaria para gourmets del humor, con texto propio y entre fogones Master Xof hará las delicias de los paladares más refinados.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "LO NUESTRO",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/lo-nuestro?funcio_id=280454",
//     "price": 14,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/08/PRINCIPALTEATRE-BARCELONA-lo-nuestro-0-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/12/TEATRE-BARCELONA-lo-nuestro.jpg",
//     "venue_id": "c00a49d0-1cd6-4a23-9df5-2a6aab4e2b82",
//     "duration": 90,
//     "description": " Lo nuestro de EuManzanares es una opera prima fresca, honesta y divertida.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "L'ORENETA",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/loreneta?funcio_id=278009",
//     "price": 24,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/TEATRE-BARCELONA-L-ORENETA-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/11/TEATRE-BARCELONA-VILLARROEL-L-ORENETA.jpg",
//     "venue_id": "3a4ec450-727e-45bf-bc0b-87a4532afb08",
//     "duration": 90,
//     "description": "Emma Vilarasau i Dafnis Balduz protagonizen L’oreneta en Barcelona, la premiada obra de Guillem Clua en el que Amelia, una madre herida en lo más profundo de su alma, se cuestiona qué es lo que nos hace humanos, lo que define nuestra humanidad y llega a la conclusión que la capacidad de sentir el dolor ajeno es lo que nos distingue de las bestias.",
//     "genres": [
//       "Drama"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "LES TRES GERMANES",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/les-tres-germanes?funcio_id=267549",
//     "price": 14,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/12/PRINCIPALTEATRE-BARCELONA-les_tres_germanes_teatre_lliure_manrique-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/CARTELLTEATRE-BARCELONA-les_tres_germanes_teatre_lliure_2021-1.jpg",
//     "venue_id": "50bf72c2-0e65-42b2-80f9-bb3d76a7e36d",
//     "duration": 150,
//     "description": "Vuelven Les tres germanes bajo la dirección de Julio Manrique, Premi de la Crítica 2020 al Mejor espectáculo. En el elenco, Mireia Aixalà, Joan Amargós, Ivan Benet, Carme Fortuny, Cristina Genebat, Jordi Rico, Marc Rius, Maria Rodríguez, Lluís Soler y Elena Tarrats sirven el texto de Chéjov tras suspender funciones en enero, por causa del COVID. Un reencuentro y un lujo.",
//     "genres": [
//       "Drama",
//       "Tragicomedia"
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "FOREVER YOUNG",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/forever-young?funcio_id=268671",
//     "price": 11,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/PRINCIPALTEATRE-BARCELONA-forever_young_poliorama_musical_tricicle-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/CARTELLTEATRE-BARCELONA-forever_young_poliorama_musical_tricicle-1.jpg",
//     "venue_id": "e3f3d6c3-ae64-4add-8819-b050c0e2243c",
//     "duration": 100,
//     "description": "Bajo la producción i dirección de El Tricicle, vuelve a la cartelera el musical de éxito Forever Young. Una comedia musical donde siete actores jóvenes se interpretan a ellos mismos, o a lo que serán dentro de 40 años, cuando estén viviendo en una residencia para artistas retirados que no se resignan a ser sencillamente viejos.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "RAMON",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/ramon?funcio_id=268673",
//     "price": 15,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/08/TEATRE-BARCELONA-Ramon-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2019/08/CARTELLTEATRE-BARCELONA-ramon-2.jpg",
//     "venue_id": "e3f3d6c3-ae64-4add-8819-b050c0e2243c",
//     "duration": 90,
//     "description": "Ramon, un monólogo tragicómico que reflexiona sobre el miedo al compromiso, los límites de la libertad y la imposibilidad de detener el paso del tiempo, escrito y dirigido por MarMonegal, e interpretado por Francesc Ferrer.\n",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "ANGLE MORT",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/angle-mort?funcio_id=284666",
//     "price": 14,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/01/TEATRE_BARCELONA-Angle-mort-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/03/TEATRE-BARCELONA-angle-mort.jpg",
//     "venue_id": "c00a49d0-1cd6-4a23-9df5-2a6aab4e2b82",
//     "duration": 120,
//     "description": "Angle Mort es la nueva comedia escrita por Roc Esquius y Sergi Belbel que nos lleva a reflexionar sobre ‘lo que se cuece’ en los ángulos muertos que nos rodean.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "CALLADITAS ESTÁIS MÁS GUAPAS ! SHOW",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/calladitas-estais-mas-guapas-show?funcio_id=273330",
//     "price": 16,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/10/TEATRE-BARCELONA-calladitas-estais-mas-guapas-show-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/TEATRE-BARCELONA-calladitas-estais-mas-guaps-show.jpg",
//     "venue_id": "c00a49d0-1cd6-4a23-9df5-2a6aab4e2b82",
//     "duration": 100,
//     "description": "",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "LA FILLA DEL MAR",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/la-barni-teatre-la-filla-del-mar?funcio_id=283492",
//     "price": 29,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/05/TEATRE-BARCELONA-la-filla-del-mar-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/TEATRE-BARCELONA-LA-FILLA-DEL-MAR-CONDAL.jpg",
//     "venue_id": "450afdde-1a91-4af2-af5e-df464546e686",
//     "duration": 100,
//     "description": "La filla del mar es una propuesta de teatro musical que acerca uno de los grandes clásicos del teatro catalán para hablarnos de identidad y diversidad.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "MONOPOLI",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/monopoli?funcio_id=277905",
//     "price": 15,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/11/TEATRE-BARCELONA-monopoli-0-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/01/TEATRE-BARCELONA-MONOPOLI-EOLIA.jpg",
//     "venue_id": "ae33dd6d-c879-4837-a9f4-c1c56ce7b0c7",
//     "duration": 80,
//     "description": "Mar Monegal, autora de Ramon (Premio de la Crítica en el Mejor Texto 2019) ahora presenta Monopoli (Texto ganador del X Combate de Dramaturgia de Temporada Alta 2020). Una nueva comedia dramática que forma parte del tríptico sobre la generación perdida.",
//     "genres": [
//       "Comedia"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "JOAQUÍN REYES: FESTEJEN LA BROMA",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/joaquin-reyes-festejen-la-broma?funcio_id=273264",
//     "price": 25,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2020/01/TEATRE-BARCELONA-joaquin-reyes-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/TEATRE-BARCELONA-joaquin-reyes.jpg",
//     "venue_id": "3726bbe6-cc81-4363-96b1-e3e0942db9f3",
//     "duration": 80,
//     "description": "Joaquín Reyes presenta Festejen la broma, un nuevo espectáculo de humor lleno de tonterías para hacer las delicias de su querido público y también, de algún despistado que se meta en el teatro buscando humor inteligente.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "UNA LLUM TÍMIDA",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/una-llum-timida?funcio_id=267143",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/04/TEATRE-BARCELONA-Una-llum-timida-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/06/CARTELLTEATRE-BARCELONA-una-llum-timida-condal.jpg",
//     "venue_id": "450afdde-1a91-4af2-af5e-df464546e686",
//     "duration": 100,
//     "description": "El Colectivo La Cicatriz, de la mano de la dirección de Marilia Samper, lleva a los escenarios la historia de Una llum tímida .",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "CIRQUE DU SOLEIL: LUZIA",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/cirque-du-soleil-luzia?funcio_id=225936",
//     "price": 34,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2020/03/PRINCIPALTEATRE-BARCELONA-luzia_cirque_du_soleil_barcelona_hospitalet.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2020/03/CARTELLTEATRE-BARCELONA-CIRQUE_DU_SOLEIL_LUZIA_BARCELONA_HOSPITALET.jpg",
//     "venue_id": "095b1910-1c20-41e6-a7a3-88cb0bd1bc7a",
//     "duration": 0,
//     "description": "Cirque du Soleil vuelve con su carpa con Luzia, una fiesta de luz y lluvia, surrealista y vibrante inspirada en la mágia de México!",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "CRIM I CÀSTIG",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/crim-i-castig?funcio_id=267530",
//     "price": 14,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/PRINCIPALTEATRE-BARCELONA-crim_i_castig-pol_lopez_lliure-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/CARTELLTEATRE-BARCELONA-crim_i_castig_pau_carrio-1.jpg",
//     "venue_id": "50bf72c2-0e65-42b2-80f9-bb3d76a7e36d",
//     "duration": 225,
//     "description": "La primera parada de la ruta hacia el Este de esta temporada pasa por Rusia. El director Pau Carrió lleva a escena la novela Crim i càstig, del escritor ruso Fiódor Dostoyevski. Un carrusel titánico de acciones y emociones en la fina línea entre la bondad y la maldad, la inocencia y la perversidad. Y con Pol López en el papel de Raskólnikov, explorando los límites de la ética y la moral.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "FAEMINO Y CANSADO: 17 VECES",
//     "external_url": "https://es.teatrebarcelona.com/espectaculo/faemino-y-cansado-17-veces?funcio_id=279922",
//     "price": 21,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/11/TEATRE-BARCELONA-faeminoycansado-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/12/TEATRE-BARCELONA-faeminoycansado.jpg",
//     "venue_id": "1e3d4519-75ed-4932-b9f6-9a0551ecdaf0",
//     "duration": 0,
//     "description": "Lo que queda de manifiesto a 17 veces es que Faemino y Cansado siempre hacen lo que les da la gana y ahora, por su edad, con más motivo.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "FINAL DE PARTIDA",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/final-de-partida?funcio_id=278093",
//     "price": 17,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/0-PRINCIPAL-final-de-partida-jordi-bosch-jordi-boixaderas-720x320-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/11/TEATRE-BARCELONA-ROMEA-final-de-partida.jpg",
//     "venue_id": "6a629624-bc48-4bb4-a6d5-aafc590f4708",
//     "duration": 100,
//     "description": "Sergi Belbel torna a Samuel Beckett amb Final de partida, un text que adquireix un nou significat a partir de l’experiència viscuda pel món després de l’esclat de la pandèmia el 2020. Ara, puja un altre cop a l’escenari amb un repartiment d’intèrprets catalans estel·lar, encapçalat per Jordi Boixaderas, que torna als escenaris després d’una llarga absència, i Jordi Bosch.",
//     "genres": [
//       "Comèdia"
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "JUDIT MARTÍN: NOT TALENT",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/judit-martin-not-talent?funcio_id=276890",
//     "price": 22,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/10/PRINCIPALTEATRE-BARCELONA-Not_talent_judit_martin_poliorama.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/10/CARTELLTEATRE-BARCELONA-judit_martin_not_talent_poliorama.jpg",
//     "venue_id": "e3f3d6c3-ae64-4add-8819-b050c0e2243c",
//     "duration": 0,
//     "description": "",
//     "genres": [
//       "Comèdia"
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "CHIPKO",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/chipko?funcio_id=283202",
//     "price": 16,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2022/02/TEATRE-BARCELONA-CHIPKO-0-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/02/TEATRE-BARCELONA-Chipko.jpg",
//     "venue_id": "bf186e78-df61-443a-94fe-48b7f4ede8cb",
//     "duration": 0,
//     "description": "Chipko és un viatge lluminós que travessa la foscor i ens torna l’esperança a través d’un recull de textos de diferents autores i autors amb dramaturgia de Daniela Feixas i Anna Guell. Històries de dones valentes que han entregat la seva vida a la causa i han guanyat les diferents batalles que han lliurat.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "EL PERRO DEL HORTELANO",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/el-perro-del-hortelano-2?funcio_id=268682",
//     "price": 11,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/PRINCIPALTEATRE-BARCELONA-el_perro_del_hortelano_pacoo_mir_poliorama_2.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/07/CARTELLTEATRE-BARCELONA-el_perro_del_hortelano_poliorama-1-1.jpg",
//     "venue_id": "e3f3d6c3-ae64-4add-8819-b050c0e2243c",
//     "duration": 80,
//     "description": "Paco Mir, de Tricicle, dirigeix El Perro del Hortelano, una comèdia palatina de Lope de Vega.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "MAYUMANA: CURRENTS",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/mayumana-currents?funcio_id=280557",
//     "price": 26,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/06/TEATRE-BARCELONA-mayumana-currents-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/06/TEATRE-BARCELONA-mayumana-currents-3.jpg",
//     "venue_id": "10ea225d-1a65-44b6-b214-f1760f75786c",
//     "duration": 0,
//     "description": "La companyia Mayumana és la companyia en el seu gènere més reconeguda en el món.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "COMEDY GOLD SHOW",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/comedy-gold-show?funcio_id=274049",
//     "price": 9,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2020/10/PRINCIPALTEATRE-BARCELONA-comedy-gold-albert-floyd-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2020/10/CARTELLTEATRE-BARCELONA-comedy-gold.jpg",
//     "venue_id": "ba38d5f1-62e8-4869-b403-8931e376afa3",
//     "duration": 90,
//     "description": "Comedy Gold Show és ja un clàssic de les nits d’humor a Barcelona. Per les seves files ha passat el bo i millor de la nova generació de còmics. Descobreix els millors monòlegs en directe i en format comedy club americà.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "EUROPA BULL",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/europa-bull?funcio_id=274512",
//     "price": 12,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/05/PRINCIPALTEATRE-BARCELONA-europa_bull_tnc.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/CARTELLTEATRE-BARCELONA-2021-EUROPA_BULL_TNC.jpg",
//     "venue_id": "47828ac3-db61-4941-b223-337448a4fe3d",
//     "duration": 115,
//     "description": "Europa Bull de Jordi Oriol i Indi Gest és un muntatge lingüísticament sorprenent a partir del mite d’Europa i de la seva ebullició actual.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "LUÍS PIEDRAHITA: ES MI PALABRA CONTRA LA MÍA",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/luis-piedrahita-es-mi-palabra-contra-la-mia?funcio_id=246406",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/12/PRINCIPALTEATRE-BARCELONA-luis-piedrahita-0-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2020/11/TEATRE-BARCELONA-luispiedrahita.jpg",
//     "venue_id": "3726bbe6-cc81-4363-96b1-e3e0942db9f3",
//     "duration": 80,
//     "description": "Es mi palabra contra la mía és el nou monòleg de Luis Piedrahita amb profundíssimes reﬂexions superﬁcials i improvisacions meticulosament assajades. Un espectacle ple d’enginy i tendresa, en el qual l’artista analitza per què ningú no està content amb allò que li ha tocat.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "EL SOTERRANI LEGENDS",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/el-soterrani-legends?funcio_id=275841",
//     "price": 18,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/01/0-PRINCIPAL-el-soterrani-legends-teatren%CC%83-victoria-720x320-1-1100x489.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/10/CARTELLTEATRE-BARCELONA-EL_SOTERRANI_LEGENDS_TEATRE_VICTORIA_STAND_UP.jpg",
//     "venue_id": "4c415c71-6214-4573-a8c5-d1c39e16e994",
//     "duration": 80,
//     "description": "El Soterrani legends és el nou projecte dels pares fundadors del Soterrani, nascut de la ferma convicció d’oferir un altre espectacle de qualitat d’humor en català a la ciutat de Barcelona i sobretot, com ells mateixs afirmen, de guanyar molts diners.",
//     "genres": [
//       "Comèdia"
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "#JUANA DOLORES# *MASSA DIVA PER A UN MOVIMENT ASSEMBLEARI*",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/juana-dolores-massa-diva-per-a-un-moviment-assembleari?funcio_id=284902",
//     "price": 12,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2020/10/PRINCIPALTEATRE-BARCELONA-juana-dolores-per-massa-diva-per-a-un-moviment-assembleari-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/TEATRE-BARCELONA-juana-dolores-ANTIC-TEATRE.jpg",
//     "venue_id": "6e41c184-c1e9-4117-803c-bc30f6afac1c",
//     "duration": 90,
//     "description": "*Massa diva per a un moviment assembleari* és la primera peça escènica de Juana Dolores, poeta i performer, proletària antifeixista d’extraradi",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "english"
//   },
//   {
//     "name": "OBSOLESCÈNCIA PROGRAMADA",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/obsolescencia-programada?funcio_id=279626",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/12/PRINCIPALTEATRE-BARCELONA-Obsolescencia-programada_beckett_2022.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/12/CARTELLTEATRE-BARCELONA-Obsolescencia-programada_beckett-2022.jpg",
//     "venue_id": "a85a66c4-8270-4ece-9bce-1ebfceb474d4",
//     "duration": 85,
//     "description": "Vivim al món de l’obsolescència programada. No només dels electrodomèstics. Les persones també som obsolescents, sobretot les dones. Anna Maria Ricart presenta Obsolescència programada, una reflexió de la situació de les dones que ja no poden tenir fills per raons biològiques i que deixen de ser “desitjables” segons la lògica de la societat de consum. Quin és el seu paper?",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "LACRIMOSA",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/lacrimosa?funcio_id=282557",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2022/01/0-PRINCIPAL-teatre-barcelona-lacrimosa-barbara-mestanza-720x320-1-1100x489.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/01/TEATRE-BARCELONA-lacrimosa-1.jpg",
//     "venue_id": "a9ee89d5-93bd-418f-9e35-8de015411205",
//     "duration": 120,
//     "description": "Bàrbara Mestanza & Francesc Cuéllar presenten Lacrimosa, una peça sobre els intents frustrats per aconseguir viure una vida feliç.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "LES IMPUXIBLES: HARAKIRI",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/les-impuxibles-harakiri?funcio_id=274486",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/PRINCIPALTEATRE-BARCELONA-harakiri_tnc_imputxibles-1.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2021/09/CARTELLTEATRE-BARCELONA-2021-HARAKIRI_TNC_IMPUXIBLES.jpg",
//     "venue_id": "47828ac3-db61-4941-b223-337448a4fe3d",
//     "duration": 75,
//     "description": "A Harakiri, la companyia Les Impuxibles, volen lliurar de tabús i estigmes tot el que envolta el suïcidi per contemplar-lo com una opció racional. A l’escena, lloc que permet reviure i remorir els morts, es produeix una cita impossible entre dos adults que, un dia, en un petit univers, van ser mare i fill. És possible que una mare ens ensenyi més morta que viva? És possible que el suïcidi d’algú ens faci més lliures?",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "catalan"
//   },
//   {
//     "name": "APOLOGIA I ESCARNI DE L’ESTUPIDESA HUMANA",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/apologia-i-escarni-de-lestupidesa-humana?funcio_id=283368",
//     "price": 12,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2021/11/TEATRE-BARCELONA-APOLOGIA-I-ESCARNI-DE-LESTUPIDESA-HUMANA-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2022/02/TEATRE-BARCELONA-VERSUS-APOLOGIA-I-ESCARNI-DE-L-ESTUPIDESA-HUMANA.jpg",
//     "venue_id": "8561774a-a92b-4019-9404-332377aea1c4",
//     "duration": 80,
//     "description": "Apologia i escarni de l’estupidesa humana és una comèdia musical surrealista de la mà del compositor multipremiat Marc Timón.  ",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "spanish"
//   },
//   {
//     "name": "RAFAEL ÁLVAREZ 'EL BRUJO': AUTOBIOGRAFIA DE UN YOGUI",
//     "external_url": "https://www.teatrebarcelona.com/espectacle/rafael-alvarez-el-brujo-autobiografia-de-un-yogui?funcio_id=284897",
//     "price": 20,
//     "image": "https://www.teatrebarcelona.com/wp-content/uploads/2019/01/PRINCIPALTEATRE-BARCELONA-Rafael-%C3%81lvarez-El-Brujo-Autobiografia-de-un-yogui-0.jpg",
//     "poster": "https://www.teatrebarcelona.com/wp-content/uploads/2019/01/autobiografia-de-un-yogui-el-brujo-330x467.jpg",
//     "venue_id": "10ea225d-1a65-44b6-b214-f1760f75786c",
//     "duration": 100,
//     "description": "Rafael Álvarez El Brujo torna als teatres amb aquesta obra basada en l’obra del gran iogui i Swami hindú Paramahansa Yogananda, impulsor del Raja Ioga a Occident.",
//     "genres": [
//       ""
//     ],
    
    
//     "language": "english"
//   }
// ]
//   })

  const shows = await prisma.show.createMany({
    data: filteredShows
  })

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    console.log('DB seeded!')
    await prisma.$disconnect()
  })