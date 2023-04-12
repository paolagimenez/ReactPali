//Luego reemplazar por datos de la DB
const infoPersonas=require('../infoPersonas.json');


const allPersonas=(req,res)=>{


   let infoJSON=JSON.stringify(Personas)//alterando Personas para que se envie en formato JSON
   console.log("llamado a get")
   res.send(infoJSON)
};

const addOnePersona =(req,res)=>{

// tomar la info que le llega y guardarla en mi variable "Personas"
//la info nos llegamo por medio de req.body -> dentro nombre
    const {IdPersona}=req.body// de toda la info del formulario, solo me estoy guardando en una variable "nombre" , el valor del input de name "nombre"
    const {PerRSoc}=req.body
    const {Alias}=req.body
    const {Domicilio}=req.body
    const {DomicilioNro}=req.body
    const {IdLocalidad}=req.body
    const {Telefono}=req.body
    const {IdDocumento}=req.body
    const {NroDocumento}=req.body
    const {IdIva}=req.body
    const {IdIngBrutos}=req.body
    const {Observaciones}=req.body
    const {FechaAlta}=req.body
    const {FechaModificacion}=req.body
    const {IdUsuarioAlta}=req.body
    const {IdUsuarioModificacion}=req.body
  
    console.log(PerRSoc)

    Personas.push({IdPersona:IdPersona})
    Personas.push({PerRSoc:PerRSoc})    
    Personas.push({Alias:Alias})
    Personas.push({Domicilio:Domicilio})
    Personas.push({DomicilioNro:DomicilioNro})
    Personas.push({IdLocalidad:IdLocalidad})
    Personas.push({Telefono:Telefono})
    Personas.push({IdDocumento:IdDocumento})
    Personas.push({NroDocumento:NroDocumento})
    Personas.push({IdIva:IdIva})
    Personas.push({IdIngBrutos:IdIngBrutos})
    Personas.push({Observaciones:Observaciones})
    Personas.push({FechaAlta:FechaAlta})
    Personas.push({FechaModificacion:FechaModificacion})
    Personas.push({IdUsuarioAlta:IdUsuarioAlta})
    Personas.push({IdUsuarioModificacion:IdUsuarioModificacion})

    res.redirect("http://localhost:3000/")
    
};

const getPersonas=(req,res)=>{
    let info=infoPersonas;
    res.send(info);
}

module.exports={allPersonas,addOnePersona, getPersonas}


