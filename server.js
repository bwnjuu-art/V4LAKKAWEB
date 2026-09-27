const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors()); 
app.use(express.json());

// CONFIGURACIÓN DE NODEMAILER CON TU GMAIL REAL
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "ardilessthiago@gmail.com", // Tu correo configurado[cite: 16]
        pass: "zbrr hogn vumy zdjq" // Tu contraseña de aplicación[cite: 16]
    }
});

app.post("/enviar-correo", async (req, res) => {
    try {
        const { carrito, cliente } = req.body;

        if (!cliente || !cliente.email) {
            return res.status(400).json({ error: "Faltan los datos del cliente" });
        }

        // Calculamos el total de la compra
        const total = carrito.reduce((acc, item) => acc + item.price, 0);

        // Mapeamos los productos con diseño seguro para clientes de correo (tablas fijas)
        const productosHTML = carrito.map(p => `
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222222; width: 60px; vertical-align: middle;">
                    <img src="${p.imagen || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80'}" alt="${p.name}" width="50" height="65" style="width: 50px; height: 65px; object-fit: cover; display: block; border: 1px solid #333333; background: #000;" />
                </td>
                <td style="padding: 12px 10px; border-bottom: 1px solid #222222; vertical-align: middle;">
                    <span style="font-size: 13px; font-weight: bold; color: #ffffff; display: block; letter-spacing: 1px; font-family: Arial, sans-serif;">${p.name}</span>
                    <span style="font-size: 11px; color: #888888; display: block; margin-top: 4px; text-transform: uppercase; font-family: Arial, sans-serif;">Talle: ${p.talle || 'Único'}</span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222222; text-align: right; vertical-align: middle;">
                    <span style="font-size: 13px; color: #ffffff; font-weight: bold; font-family: Arial, sans-serif;">$ ${p.price.toLocaleString('es-AR')}</span>
                </td>
            </tr>
        `).join('');

        const mailOptions = {
            from: '"!V4LAKKA 001" <ardilessthiago@gmail.com>', // Usar tu correo real evita que caiga en Spam
            to: cliente.email,
            subject: "CONFIRMACIÓN DE ORDEN // !V4LAKKA",
            html: `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Confirmación de Orden</title>
                </head>
                <body style="margin: 0; padding: 0; background-color: #000000; font-family: Arial, sans-serif;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #000000; padding: 40px 0;">
                        <tr>
                            <td align="center">
                                <!-- Contenedor Principal -->
                                <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0a0a0c; border: 1px solid #222222; padding: 30px;">
                                    
                                    <!-- LOGO Y ENCABEZADO -->
                                    <tr>
                                        <td align="center" style="border-bottom: 1px solid #222222; padding-bottom: 20px;">
                                            <h1 style="color: #ffffff; font-size: 20px; font-weight: bold; letter-spacing: 5px; margin: 0;">!V4LAKKA</h1>
                                            <p style="color: #777777; font-size: 10px; letter-spacing: 3px; margin: 6px 0 0 0; text-transform: uppercase;">TERMINAL DE COMPRAS // 001</p>
                                        </td>
                                    </tr>

                                    <!-- MENSAJE DE ESTADO -->
                                    <tr>
                                        <td style="padding: 25px 0 15px 0;">
                                            <p style="font-size: 12px; color: #888888; margin: 0 0 10px 0; letter-spacing: 1px;">ESTADO: <span style="color: #ffffff; font-weight: bold;">ORDEN RECIBIDA</span></p>
                                            <p style="font-size: 13px; color: #cccccc; line-height: 1.6; margin: 0;">
                                                Hola <strong style="color: #ffffff;">${cliente.nombre}</strong>, tu transmisión de compra se ha procesado con éxito. Prepararemos tu paquete en nuestra base de Mar del Plata para su envío.
                                            </p>
                                        </td>
                                    </tr>

                                    <!-- DATOS DE ENVÍO -->
                                    <tr>
                                        <td style="padding: 10px 0 20px 0;">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #121215; border: 1px solid #222222; padding: 15px;">
                                                <tr>
                                                    <td>
                                                        <p style="margin: 0 0 5px 0; color: #ffffff; font-size: 11px; letter-spacing: 1px; font-weight: bold;">DESTINO DE ENVÍO:</p>
                                                        <p style="margin: 0; color: #aaaaaa; font-size: 12px; line-height: 1.4;">${cliente.direccion}, ${cliente.provincia} (CP: ${cliente.codigoPostal})</p>
                                                        <p style="margin: 5px 0 0 0; color: #aaaaaa; font-size: 12px;">Teléfono: <span style="color: #aaaaaa; text-decoration: none;">${cliente.telefono}</span></p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- DETALLE DE PIEZAS -->
                                    <tr>
                                        <td>
                                            <p style="color: #ffffff; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 10px 0; font-weight: bold;">DETALLE DE PIEZAS:</p>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                                                ${productosHTML}
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- TOTAL -->
                                    <tr>
                                        <td style="padding: 20px 0 30px 0;">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #333333; padding-top: 15px;">
                                                <tr>
                                                    <td style="font-size: 12px; letter-spacing: 2px; color: #888888;">TOTAL PAGADO</td>
                                                    <td align="right" style="font-size: 16px; color: #ffffff; font-weight: bold; letter-spacing: 1px;">$ ${total.toLocaleString('es-AR')} ARS</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>

                                    <!-- FOOTER -->
                                    <tr>
                                        <td align="center" style="border-top: 1px solid #222222; padding-top: 20px;">
                                            <p style="font-size: 10px; color: #666666; letter-spacing: 2px; margin: 0;">MAR DEL PLATA — ARGENTINA</p>
                                            <p style="font-size: 9px; color: #444444; margin: 5px 0 0 0;">Este correo fue generado automáticamente por el sistema de V4LAKKA.</p>
                                        </td>
                                    </tr>

                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error al enviar el correo:", error);
                return res.status(500).json({ error: "No se pudo enviar el correo" });
            } else {
                console.log("Correo profesional enviado con éxito a:", cliente.email);
                return res.json({ success: true, message: "Correo enviado correctamente" });
            }
        });

    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.listen(3000, () => {
    console.log("Servidor Backend corriendo en http://localhost:3000");
});