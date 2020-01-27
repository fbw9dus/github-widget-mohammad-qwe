class myClass {
    constructor(button,classname,ul){
        this.button = document.querySelector(button)
        this.userName = document.querySelector(classname)
        this.ul = document.querySelector(ul)
        this.button.addEventListener("click",this.myData.bind(this))
       
    }

    async  myData(){
        if(this.userName.value=="")return
        this.ul.innerHTML=""
    let response = await fetch(`https://api.github.com/users/${this.userName.value}/repos`)
       
         let myJson= await  response.json()
      
       
        myJson.forEach(element => {
        var myList=  `
            <li class=" list-group-item"><div class=" d-flex justify-content-between"> <span>${element.full_name}</span><span> ${(element.created_at).slice(8,10)}.${(element.created_at).slice(5,7)}.${(element.created_at).slice(0,4)}</span></div>
            <span class="d-block">${element.description}</span>
            <span class="d-block"><a href="${element.html_url}">${element.html_url}</a></span>
            </li> 
        `
 this.ul.insertAdjacentHTML("afterbegin",myList)



       });
       this.userName.value=""
     }
}
var getData = new myClass("button",".form-control","ul")

