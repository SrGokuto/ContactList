class Contact{
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    updateContact(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    displayInfo(){
        return "Nombre: " + this.name + ". Telefono: " + this.phone + ". Email: " + this.email + "."
    }
}
export default Contact