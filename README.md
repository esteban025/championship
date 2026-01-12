# CHAMPIONS - Una platoforma para la gestión de campeonatos deportivos

CHAMPIONS es una plataforma web diseñada para facilitar la gestión de campeonatos deportivos. Permite a los organizadores crear y administrar torneos, equipos y jugadores de manera eficiente.

## Características
- Creación y gestión de campeonatos deportivos de futbol realizado por el organizador.
- Registro y administración de equipos y jugadores.
- Programación automatica de partidos.
- Seguimiento de resultados y estadísticas en tiempo real.
- Interfaz amigable y fácil de usar.
- Notificaciones y recordatorios para representantes de los equipos.

## Tecnologías Utilizadas
- Frontend: Astro, React Islands, tailwindcss.
- Backend: TypeScript.
- Base de datos: Supabase, pero por el momento MySQL local.
- Autenticación: Supabase Auth.
- Despliegue: Vercel.

## Estructura de base de datos
La base de datos está estructurada para manejar campeonatos, equipos, jugadores y partidos. A continuación se muestra un esquema simplificado:

- Campeonatos
  - id (PK)
  - nombre
  - fecha_inicio
  - fecha_fin
- Equipos
  - id (PK)
  - nombre
- Jugadores
  - id (PK)
  - nombre
  - equipo_id (FK)
  - dorsal
- Partidos
  - id (PK)
  - equipo_local_id (FK)
  - equipo_visitante_id (FK)
  - fecha
  - resultado
  - campeonato_id (FK)

## Estilo de la web
El diseño de la plataforma utiliza una paleta de colores vibrantes y modernos para ofrecer una experiencia visual atractiva. Los colores principales son:
- Rich black (#00df81)
- Dark green (#032221)
- Bangladesh green (#03624c)
- Mountain Meadow (#2cc295)
- Caribbean Green (#00df81)
- Anti-flash white (#f1f7f6)
El estilo de la página será moderno con bordes redondeados muy notables, Efecto glassmorphism con backdrop-filter blur, por lo que las cards o secciones deberán tener algun tipo de fondo transparente simliar al diseño de glass de Windows 11 o moviles de apples.

## Paginas principales
- Página de inicio: Presenta una visión general de la página con las siguientes secciones:
  - Hero Section: Una sección destacada con un llamado a la acción para registar un equipo a algun campeonato disponible o un contacto para comunicarse personalmente con el organizador.
  - Características: Una descripción de las principales características de la plataforma.
  - Reglamento: Explicación de las reglas y formatos de los campeonatos.
  - Galeria: Imágenes y videos de campeonatos anteriores.
  - Testimonios: Comentarios de usuarios satisfechos.
  - Footer: Información de contacto y enlaces a redes sociales.

## Descripción general
En la pagina podra registarse una persona como organizador de un campeonato, y podra tendra acceso a un panel de administrador donde podra crear campeonatos, gestionar equipos y jugadores, programar partidos y ver estadisticas.

En la pagina principal deberá haber un apartado donde se muestren los campeonatos disponibles o publicados por los organizadores, y una persona podra registrar a su equipo en ese campeonato o contactarse con el organizador para mas informacion o dirigirse a las especificaciones de ese campeonatos, lugar, monto de inscripcion o reglamentos etc.

Por eso la pagina principal debera renderizar que esta pagina sirve a los organizadores de campeonatos a llevar un control completo y tener mayor alcance para que mas personas se enteren de sus campeonatos y puedan inscribir a sus equipos.

## DUDAS
1. Flujo de usuarios y roles:
 - Define claramente los roles (organizador, representante de equipo, jugador, visitante).
 - Especifica qué puede hacer cada rol y cómo navegan por la plataforma.

ROLES:
- Organizador: Al momento de logearse o registrase como administrador de campeonatos, puede crear y gestionar campeonatos, equipos, jugadores y partidos. Accede al panel de administración.
- Representante de equipo: Al momento de registrase deberá poner que se quiere logear en la pagina como representante de un equipo, entonces podra inscribir a su equipo en los campeonatos disponibles, ver el estado de su inscripción, y recibir notificaciones sobre partidos y resultados o deudas.
- Cualquier otra persona que visite la pagina web sin logearse sera un visitante, y podra ver los campeonatos disponibles, reglamentos, galeria y testimonios, pero no podra inscribir equipos ni acceder al panel de administración.

2. Autenticación y permisos:
 - ¿Cómo se registran y autentican los usuarios?
    Pueden registrarse mediante correo electronico y contraseña usando Supabase Auth.
 - ¿Qué datos son obligatorios para cada tipo de usuario?
    Organizador: Nombre completo, correo electronico, contraseña.
    Representante de equipo: Nombre completo, correo electronico, contraseña, nombre del equipo.

3. Panel de administración:
 - Detalla las funcionalidades exactas del panel del organizador (CRUD de campeonatos, equipos, jugadores, partidos, estadísticas, notificaciones).
  ESTE CAMPO POR EL MOMENTO NO LO TENGO CLARO, sin embargo, basta que este panel de administracion no permita el ingreso a usuarios que no sean organizadores, y que sea un panel unico para ese usuario, osea no se mezcle con el de otro organizador.

4. Proceso de inscripción:
 - ¿Cómo se inscribe un equipo? ¿Qué validaciones hay? ¿Hay pagos en línea o solo información?
    Un representante de equipo se registra en la pagina como representante de un equipo, luego podra ver los campeonatos disponibles y seleccionar uno para inscribir a su equipo. Debera completar un formulario con los datos del equipo y los jugadores. Habra validaciones para evitar duplicados y asegurar que todos los campos obligatorios esten completos. Por el momento no habra pagos en linea, solo informacion sobre el monto de inscripcion que debera ser abonado al organizador.
5. Notificaciones:
 - ¿Qué tipo de notificaciones se envían? (email, push, solo en la web)
    Solamente por email.
 - ¿Cuándo y a quién se envían?
    En el reglamento que el organizador detalle en su campeonato debera especificar cuando y como se enviaran las notificaciones, por ejemplo sobre fechas de partidos, resultados, deudas, etc. Por lo que el organizador enviara esta informacion solamente a los representantes de los equipos inscritos en su campeonato.

6. Reglamento y formatos:
 - ¿El reglamento es editable por campeonato? ¿Hay plantillas o solo texto libre?
    El organizador debera detallar el reglamento de su campeonato en el panel de administracion, y podra editarlo cuando quiera. Por el momento solo sera texto libre, no habra plantillas.

7. Galería y testimonios:
 - ¿Quién puede subir imágenes/videos/testimonios? ¿Hay moderación?
    El organizador podra elegir en su panel de administracion si quiere subir imagenes/videos/testimonios de su campeonato, y este se publicara en la pagina principal de la web. No habra moderacion por el momento, pero se recomienda que el organizador suba contenido apropiado y relevante.

8. Escalabilidad y multi-campeonato:
 - ¿Un organizador puede tener varios campeonatos activos?
    Si
 - ¿Un equipo puede participar en varios campeonatos?
    Si

9. Diseño responsivo:
 - ¿La web será mobile-first? ¿Qué tan importante es la experiencia móvil?
    Si, la web sera mobile-first, y la experiencia movil es muy importante para asegurar que los usuarios puedan acceder y utilizar la plataforma desde cualquier dispositivo.
    Sin embargo, se recomienda a los organizadores que gestionen sus campeonatos desde una computadora para una mejor experiencia de usuario.

10. Internacionalización:
 - ¿Solo español o consideras otros idiomas a futuro?
    Por el momento solo en español.