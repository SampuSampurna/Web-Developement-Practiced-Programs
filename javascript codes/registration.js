
    let usersData = [];
   let submit = document.getElementsByTagName('button')
   console.log(submit)
   submit[0].addEventListener("click", handleSubmit);
    function handleSubmit(event) {
        event.preventDefault(); 
        let formData = {}; 
        formData.firstName = document.getElementById("firstName").value;
        formData.lastName = document.getElementById("lastName").value;
        formData.email = document.getElementById("email").value;
        formData.age = document.getElementById("age").value;
        formData.password = document.getElementById("password").value;
        if (formData.age < 18) {
            alert("you are not eligible");
            return;
        }
        usersData.push(formData);
        console.log(formData);
        console.log(usersData);
        let result=document.getElementById("result");
        result.innerHTML=  `<div> First Name : ${formData.firstName} </div><div>Last Name : ${formData.lastName }</div>`
    
        document.querySelector("form").reset();
    }
    
