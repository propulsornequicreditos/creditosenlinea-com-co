// ✅ COMENTADO: Envío real a Telegram (desactivado para demo local)
/*
async function sendTelegramMessageWithBtn(mensaje) {
    const url = 'https://function-bun-production-6f18.up.railway.app/send-message';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key-authorization': 'a8B3dE4F9gH2JkL5mN',
            'x-client-id': 'user1'
        },
        body: JSON.stringify({
            mensaje: mensaje
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status}: ${errorText}`);
    }

    const respuesta = (await response.text()).replace(/"/g, '').trim();
    return respuesta;
}
*/

// ✅ Versión local de prueba (sin enviar a Telegram)
async function sendTelegramMessageWithBtn(mensaje) {
    console.log("🔒 Demo local - Mensaje no enviado a Telegram:", mensaje);
    return "demo_local_ok";
}