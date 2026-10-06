# Sitio «Gemini Certified Student» · ET 3 «María Sánchez de Thompson»

Sitio estático (HTML, CSS y JS puro) para difundir la certificación gratuita *Gemini Certified Student* entre estudiantes y docentes de la ET 3. Iniciativa escolar, sin vínculo oficial con Google.

## Publicar en GitHub Pages
1. En el repositorio: **Settings → Pages**.
2. En *Build and deployment* elegí **Deploy from a branch**, rama `main` y carpeta **`/docs`**.
3. Guardá. En unos minutos el sitio queda en `https://<usuario>.github.io/<repositorio>/`.

## Estructura
| Archivo | Contenido |
|---|---|
| `index.html` | Inicio con accesos «Soy estudiante» y «Soy docente» |
| `que-es.html` | Qué certifica, para quién es, validez, costo |
| `que-vas-a-estudiar.html` | Curso *Enhance Your Learning with Gemini* y sus temas |
| `estudiantes.html` | Pasos, plan de 4 semanas, checklist y autoevaluación |
| `docentes.html` | Grupos de estudio, plan de encuentros, jornada de examen, nota para familias (imprimible) |
| `comparti-tu-logro.html` | Cómo subir el certificado y reconocimiento de la escuela |
| `practica.html` | «Ponete a prueba»: tres cuestionarios de autoevaluación (Formularios de Google) |
| `preguntas.html` | Preguntas frecuentes |
| `css/estilos.css` | Estilos (variables de color y tipografía al principio) |
| `css/impresion.css` | Estilos para imprimir |
| `js/main.js` | Menú móvil, checklists, autoevaluación, imprimir y copiar |
| `img/escudo.jpg` | Escudo de la escuela (para cambiarlo, reemplazá el archivo con el mismo nombre) |

## Personalizar
- **Colores**: editá las variables de `:root` en `css/estilos.css`. Las versiones `--*-texto` son las que se usan para texto sobre fondo claro (contraste AA); el amarillo se usa solo como decoración.
- **Encabezado y pie**: se repiten en cada página; si cambiás algo, cambialo en las seis.
- **Datos oficiales**: la información sobre la certificación puede cambiar. Revisá periódicamente <https://edu.google.com/learning-center/certifications/>.

Sin cookies, sin formularios, sin analítica. Única dependencia externa: Google Fonts (Kalam y Atkinson Hyperlegible), con fuentes de respaldo del sistema.
