

const createList=()=>{
    const data=document.getElementById("data").value;
    const unorderlist=document.getElementById("addlist");
    const list=document.createElement("li");
    const checkbox=document.createElement("input");
    const span=document.createElement("span");
    checkbox.type="checkbox";
    checkbox.name="name";
    checkbox.value="value";
    checkbox.id="id"; 
    if(data.length!=0){
        checkbox.classList.add("check");
        const datalist=document.createTextNode(data);
        span.appendChild(datalist);
        span.classList.add("data");
        list.appendChild(checkbox);
        list.appendChild(span);
        unorderlist.appendChild(list);
    }else{
        alert("please enter something")

    }

}