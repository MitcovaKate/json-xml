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
             
              localStorage.setItem(`formDta-${data.name.toUpperCase()}`, jsonData) 

                     }

const loadFromData=(e)=>{
      let input =e.target
      
      let name=input.value
      // input.value = input.value.toUpperCase();
  
      let foundKey=Object.keys(localStorage).find(
      key=>key.startsWith("formData-") && key.endsWith(name)
       )
 
      if (foundKey && name.length > 0) {
          let data = JSON.parse(localStorage.getItem(foundKey))
          Object.keys(data).forEach(key=>{
          let value = data[key]
          document.querySelector(`#${key}`).value = value
   })
   }
//       else if(input.value != value){
//           let inputsAll = document.forms[0].querySelectorAll('input')
//           inputsAll.forEach((input) => {
//           input.value = ""
//    })  
//  }

}


document.forms[0].addEventListener('submit',saveFormData)
document.querySelector('form [id="name"]').addEventListener('keyup',loadFromData)
