import Contact from "./Contacts.js"
import {select, input} from "@inquirer/prompts"

let contacts = [];
while (true) {
    console.clear();
    const option = await select({
        message: "📒 Agenda - Menu",
        choices: [
            { name: "➕ Agregar", value: "add" },
            { name: "🖊️ Actualizar", value: "update" },
            { name: "🗑️ Eliminar", value: "delete" },
            { name: "👀 Ver contactos", value: "check" },
            { name: "🚪 Salir", value: "exit" },
        ],
    });

    if (option === "exit") {
        console.log("Hasta prondo!");
        await new Promise(resolve => setTimeout(resolve, 2000));
        break;
    }

    if (option === "add") {
        console.log("📥 Ingrese contacto");
        const name = await input({ message: "Ingrese el nombre: " });
        const phone = await input({ message: "Ingrese el móvil: " });
        const email = await input({ message: "Ingrese el email: " });
        const contact = new Contact(name, phone, email);
        contacts.push(contact);
        console.log(contact.displayInfo());
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    if (option === "update") {
        console.log("🖊️ Actualizar contacto");
        console.table(
            contacts.map((contact) => {
                return {
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                };
            })
        );
        const id = await input({ message: "Ingrese el ID del contacto a editar: " });
        const contact = contacts[id];
        const name = await input({ message: "Ingrese el nombre: " });
        const phone = await input({ message: "Ingrese el móvil: " });
        const email = await input({ message: "Ingrese el email: " });
        contact.updateContact(name, phone, email);
        contacts[id] = contact;
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    if (option === "delete"){
        console.log("🗑️ Eliminar contacto")
        console.table(
            contacts.map((contact) => {
                return {
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                };
            })
        );
        console.log("Ingrese el ID del contacto a Eliminar");
        const id = await input({ message: "Ingrese el ID del contacto a editar: " });
        contacts.splice(id, 1)
        console.log("Contacto Eliminado");
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    if (option === "check"){
        console.log("👀 Lista de contactos")
        console.table(
            contacts.map((contact) => {
                return {
                    name: contact.name,
                    phone: contact.phone,
                    email: contact.email,
                };
            })
        );
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}


// console.table(contacts.map((contact) => contact.displayInfo()));

console.table(
    contacts.map((contact) => {
        return {
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
        };
    })
);