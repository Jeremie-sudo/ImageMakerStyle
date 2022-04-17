const gryscale = document.getElementById('gryscale')
const sepia = document.getElementById('Sepia')
const brightness = document.getElementById('brightness')
const contrast = document.getElementById('contrast')
const hrotation = document.getElementById('hrotation')
const img = document.querySelector('img')

  
 let sepValue
 let brigValue
 let contraValue
 let hrotValue
// Prendre inserer la valeur de Gryscale
gryscale.addEventListener('input',(e)=>{
    const gry = document.getElementById('gry')
    let gryValue  = 'grayscale('+e.target.value+'%)'
     img.style.setProperty('--gryscale',gryValue)
    gry.textContent = gryValue
   
})
// Prendre inserer la valeur de Sepia
sepia.addEventListener('input',(e)=>{
    const sp = document.getElementById('sp')
    let spValue  = 'sepia('+e.target.value+'%)'
     img.style.setProperty('--sepia',spValue)
    sp.textContent = spValue
   
})
// Prendre inserer la valeur de Brightness
brightness.addEventListener('input',(e)=>{
    const br = document.getElementById('br')
    let brValue  = 'brightness('+e.target.value+'%)'
     img.style.setProperty('--brightness',brValue)
    br.textContent = brValue
   
})
// Prendre inserer la valeur de Contrast
contrast.addEventListener('input',(e)=>{
    const cs = document.getElementById('cs')
    let csValue  = 'contrast('+e.target.value+'%)'
     img.style.setProperty('--contrast',csValue)
    cs.textContent = csValue
   
})
//Prendre inserer la valeur de hue-rotation
 hrotation.addEventListener('input',(e)=>{
    const hr = document.getElementById('hr')
    let hrValue  = 'hue-rotate('+e.target.value*2+'deg)'
    console.log(hrValue)
     img.style.setProperty('--huerotate',hrValue)
    hr.textContent = hrValue
   
})

