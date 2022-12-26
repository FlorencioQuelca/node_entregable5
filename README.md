## CHAT API

Punto de partida

Cuando queremos recuperar una contraseña hago una peticion que me pide el email

/api/v1/auth/recovery-password
- post crear un nuevo recovery password
    - Llegar el correo electronico 
    - Link que te permite hacer una peticion para actualizar tus datos

/api/v1/auth/recovery-password/:id
- patch actualizar la contraseña validando el enlace del recovery password
    - cuando mandamos la nueva contraseña pasan 2 cosas
        - Se modifica la contraseña en el usuario
        - Se modifica el recoveryToken como ya usado, para que no se pueda volver a utilizar

        ------------------------------------------------------------------------------------------------------------------

## Descripcion del proyecto

> En este proyecto implementaran todo lo visto hasta el momento, crearan una aplicación “comodin” que la van a poder implementar en distintas aplicaciones, un chat!
> 

<aside>
Es importante que valides el correcto funcionamiento de tu aplicación.
Debes de cumplir con los requerimientos indicados, las entregas y ten en cuenta las consideraciones listadas.
Así mismo aprovecha los recursos recomendados.

</aside>

## Instrucciones

1. Deberas crear una API que gestione login de usuarios manejando JsonWebToken, creando un middleware de autenticacion
2. Al hacer el login deberas de retornar el token para que el usuario pueda hacer las peticiones a rutas protegidas
3. El middleware debera verificar si el token pertenece a un usuario existente y retornar un error en caso de que no

[https://github.com/SheykoWk/Node-skeleton](https://github.com/SheykoWk/Node-skeleton)

4. En base al siguiente [diagrama](https://dbdiagram.io/d/6139516e825b5b0146f9a927) y relaciones, deberan crear los modelos y relaciones (en el init models), para poder vincular con sequelize

(El modelo de usuarios puede ser el mismo que ya tienen en su skeleton)

5. Tomen los siguientes puntos a considerar
    1. Un usuario tiene muchas conversaciones
    2. Un usuario es participante de muchas conversaciones
    3. Un usuario envia muchos mensajes
    4. Una conversacion tiene muchos participantes
    5. Una conversacion tiene muchos mensajes
6. Deberan existir las siguientes rutas con sus respectivos verbos
    1. /api/v1/conversations
        1. Esta ruta debe estar protegida
        2. OPCIONAL: Debera mostrar las conversaciones del usuario loggeado
        3. Podras crear conversaciones nuevas
        
        <aside>
        <img src="/icons/help-alternate_gray.svg" alt="/icons/help-alternate_gray.svg" width="40px" /> AYUDA: En el controlador donde creas una nueva conversacion, necesitaras crear tambien los participantes, es decir: necesitamos crear una conversacion entre Sahid y Erik , cuando creas la conversacion es necesario crear los 2 participantes que estaran en esa conversacion que acabas de crear
        
        </aside>
        
    2. /api/v1/conversations/:conversation_id
        1. Esta ruta debe estar protegida
        2. Debera mostrar una conversacion en especifico
        3. La podras eliminar y modificar desde aqui
    3. /api/v1/conversations/:conversation_id/messages
        1. Esta ruta debe estar protegida
        2. Mostrara todos los mensajes que tiene la conversacion
        3. Permitira crear nuevos mensajes
        
    4. /api/v1/conversations/:conversation_id/messages/:message_id
        1. Esta ruta debe estar protegida
        2. Mostrara un mensaje en especifico
        3. Permitira eliminarlo, pero no modificarlo


        Ejemplo relacion muchas tablas anidadas
        Users.findAll({
    include:[{
        model: Participants,
        include: [{
            model: Conversations
        }]
    }]
})


# Rubrica

- Sintaxis
    - El codigo debe tener la sintaxis correcta

20%

- Elementos
    - Debe contener los archivos separados con arquitectura MVC

10%

- Funcionalidad
    - Al hacer peticiones no deben generar errores, y deben de funcionar todas las peticiones que se piden en las instrucciones

60%

- Codigo en ingles

10%

const data = await Conversations.create()

data.id

