

class Button {
  constructor(texto, background){
    this.texto = texto;
    this.background = background
    this.padding = ' 14px 22px'
    this.borderRadius = '9px'
  }

  funcionar(){
    const button = document.createElement('button')
    button.innerText = this.texto
    button.style.color = "#fff"
    button.style.background = this.background
    button.style.padding = this.padding
    button.style.borderRadius = this.borderRadius
    return button
  }

  appendTo(seletor){
    const  targetElemento = document.querySelector(seletor)
    return targetElemento.append(this.funcionar())
  }
}


const bluneButton = new Button('Comprar', 'hsl(441, 48%, 53%)')




// VERSAO ANTIGA
function Btn (texto, background){
  this.texto = texto;
  this.background = background
  this.padding = ' 14px 22px'
  this.borderRadius = '9px'
}
Btn.prototype.elemento = function(){
  const button = document.createElement('button')
  button.innerText = this.texto
  button.style.color = "#fff"
  button.style.background = this.background
  button.style.padding = this.padding
  button.style.borderRadius = this.borderRadius
  return button
}

const button = new Btn('Validar', '#fb2')

document.body.append
