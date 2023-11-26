import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonaService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  nombreInput:string = '';
  apellidoInput:string = '';
  
  constructor(private LoggingService:LoggingService, private personasService: PersonaService){
    this.personasService.saludar.subscribe(
     (indice:number) => alert("El indice es: " + indice)
    );
  }

  ngOnInit(){
    
  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    //this.personas.push( persona1 );
    //this.LoggingService.enviaMensajeConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido);
    //this.personaCreada.emit( persona1 );
    this.personasService.agregarPersona( persona1 );
  }
}
