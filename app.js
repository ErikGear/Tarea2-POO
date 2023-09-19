const listaContactos = [];
class Contacto {
  static idContacto = 0;

  constructor(nombre, apellidos, telefono) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._telefono = telefono;
    this._idContacto = ++Contacto.idContacto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellidos() {
    return this._apellidos;
  }

  set apellidos(apellidos) {
    this._apellidos = apellidos;
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(telefono) {
    this._telefono = telefono;
  }

  get idContacto() {
    return this._idContacto;
  }

  //sobreescribiendo el metodo toString de la Clase padre Object
  toString() {
    return `Id: ${this._idContacto} - Nombre: ${this._nombre} Apellidos:${this._apellidos} Telefono: ${this._telefono}`;
  }
}

class ListaContactos {
  static agregarContacto(contacto) {
    listaContactos.push(contacto);
  }

  static buscarContactoNombre(nombre) {
    for (const contacto of listaContactos) {
      if (contacto.nombre === nombre) {
        console.log(contacto.toString());
      }
    }
  }

  static mostrarContactos() {
    for (const contacto of listaContactos) {
      console.log(contacto.toString());
    }
  }
}
let opcion = undefined;
do {
  let opcion = Number(
    prompt(
      "Ingrese una opción" +
        "\n 1. Agregar contacto" +
        "\n 2. Buscar contacto" +
        "\n 3. Mostrar contactos" +
        "\n 4. Salir"
    )
  );

  switch (opcion) {
    case 1:
      let nombre = prompt("Ingrese el nombre del contacto");
      let apellidos = prompt("Ingrese los apellidos del contacto");
      let telefono = prompt("Ingrese el telefono del contacto");
      let nuevoContacto = new Contacto(nombre, apellidos, telefono);
      ListaContactos.agregarContacto(nuevoContacto);
      break;
    case 2:
      let buscarNombre = prompt("Ingrese el nombre del contacto");
      ListaContactos.buscarContactoNombre(buscarNombre);
      break;
    case 3:
        ListaContactos.mostrarContactos();
      break;

    default:
        alert(`Opción ${opcion} invalida, vuelva a intentarlo`);
      break;
  }
} while (opcion !== 4);
