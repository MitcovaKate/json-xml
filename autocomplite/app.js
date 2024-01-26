const saveFormData=(e)=>{
    e.preventDefault()
    let form=e.target
    let inputs=[...form.querySelectorAll('input')]
    let data=inputs
               .filter(input=>input.type != 'password')
               .reduce((acc,input)=>{acc[input.id]=input.value 
                  return acc},{})
   
              let jsonData=JSON.stringify(data)
       
// store the data  
localStorage.setItem(`formDta-${data.name}`, jsonData)     
}

const loadFromData=(e)=>{
      let input =e.target
      let name=input.value
      let foundKey=Object.keys(localStorage).find(key=>key.startsWith("formData-") && key.endsWith(name)
      )
      if(foundKey && name.length>0){
      let data=JSON.parse(localStorage.getItem(foundKey))
}
let inputElements = Array.from(data)
inputElements.forEach((element)=>{
    if (element.id in data) { 
      element.value = data[element.id]
   
    } })

}
document.forms[0].addEventListener('submit', saveFormData)
