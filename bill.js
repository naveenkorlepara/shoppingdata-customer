const scriptURL = 'https://script.google.com/macros/s/AKfycbxrx7o3g67MccyfbSGVRkA501tmfe1u67vgZHHYBeRKJuTPDeN1JSJAogtTtpnJdDVq/exec'
  let form=document.forms['bill-form'];
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch(scriptURL,
    {
      method:'POST',
      body:new FormData(form)
    })
    .then((res)=>alert("Thank you!"))
    
    .catch(error=>console.error('Error!',error.message))
  })
  function sendwhatsapp(){
    
       var Name = document.querySelector(".name").value;
       var pname=document.querySelector(".pname").value;
       var amount=document.querySelector(".amount").value;
      
       var message = document.querySelector(".message").value;
       var phone=document.querySelector(".phone").value;
      
       var url= "https://wa.me/" +"+91"+phone+ "?text="
       +"Customer : "+Name+"%0a"
       +"purchase holder : "+pname+"%0a"
       +"Amount: "+amount+"%0a"
       +"Message : "+message;

      
       window.open(url, '_blank').focus();
        
    } 