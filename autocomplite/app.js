const saveFormData=(e)=>{
    e.preventDefault()
    let form=e.target
    let inputs=form.querySelectorAll('input')
    let data=inputs
              .filter(input=>input.type !='password')
              .reduce((acc,input)=>{
                    acc[input.id]=input.value
                    return acc
              },{})
              let jsonData=JSON.stringify(data)
}
document.forms[0].addEventListener('submit', saveFormData)