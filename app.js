
window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('taskForm');
    if (el) {
      el.addEventListener('submit',(event)=>{
        event.preventDefault();
        let first_name = event.target.first_name;
        let last_name = event.target.last_name;
        let email = event.target.email;
        let number = event.target.number;
        let birthday = event.target.birthday;
        let gender = event.target.gender;
        let Address = event.target.Address;
        if(first_name.value != "" && 
        last_name.value != "" &&
        email.value != "" &&
        number.value != "" &&
        birthday.value != "" &&
        gender.value != "" &&
        Address.value != "" )
        {
            //console.log('test');
            createCard(first_name.value , last_name.value , email.value , number.value , birthday.value , gender.value , Address.value);
            first_name.value= "" ;
            last_name.value = "" ;
            email.value = "" ;
            number.value = "" ;
            birthday.value = "" ;
            gender.value = "" ;
            Address.value = "";
            }
    })
    }
});

const createCard=(first_name,last_name,email,number,birthday,gender,Address) =>{
    const li_list =[email,number,birthday,gender,Address];
    let full_name=first_name+" "+last_name;
    let h5 = document.createElement("h5");
    h5.setAttribute("class","card-title");
    h5.textContent=full_name;

    let div1=document.createElement("div");
    div1.setAttribute("class" , "card-body");
    div1.appendChild(h5);

    let ul=document.createElement("ul");
    ul.setAttribute("class","list-group list-group-flush");
    for(let i=0;i<5;i++){
        let li=document.createElement("li");
        li.setAttribute("class","list-group-item");
        li.textContent=li_list[i];
        ul.appendChild(li);
    }
    
    let img=document.createElement("img");
    img.setAttribute("src","placeholder.jpg");
    img.setAttribute("class","card-img-top");
    img.setAttribute("width","390px");
    img.setAttribute("height","200");

    let div2=document.createElement("div");
    div2.setAttribute("class","card");
    div2.setAttribute("style","width: 18rem;");
    div2.appendChild(img);
    div2.appendChild(div1);
    div2.appendChild(ul);

    let div3=document.createElement("div");
    div3.setAttribute("class","p-4");
    div3.appendChild(div2);

    let main_div=document.getElementById("flex2");
    main_div.appendChild(div3);
    if(document.getElementById("clear")==null){
        createButton();
    }

}
const createButton=()=>{
    let section =document.getElementById("cardsSection");
    let but=document.createElement("button");
    but.setAttribute("type","submit");
    but.setAttribute("class","button");
    but.setAttribute("value","Clear");
    but.setAttribute("id","clear");
    but.textContent="Clear";
    section.appendChild(but);
    but.addEventListener("click",()=>{
        let text ="Are you sure ? ";
        if(confirm(text)==true){
        let cards=document.getElementById("flex2");
        let but=document.getElementById("clear");
        cards.remove();
        but.remove();}
    })

}