let arr=[]; 

document.getElementById("btn_add").addEventListener("click",()=>{
    checkValue();
})

function checkValue(){ 

    // get data from user 
    
    let proName = document.getElementById("proName");
    let proPrice = document.getElementById("proPrice");
    let proCategory = document.getElementById("mySelect");
    let proImge = document.getElementById("url_img");  

    if(proName.value!=''&& proPrice.value!=''&& proCategory.value!=''&& proImge.value!=''){

        addItem(proName.value,proPrice.value,proCategory.value,proImge.value);

        let obj={
            pName:proName.value ,
            pPrice: proPrice.value ,
            pCategory : proCategory.value,
            pImag : proImge.value
        } ;

        addToLocalStorage(obj) ;

    } 

    else{
        alert("please fill all the inputs");
    }

    proName.value=' ';
    proPrice.value='';
    proCategory.value=''; 
    proImge.value='';

} 


function addItem(pN,pP,pC,pI) {

    // get table 

    let productTable = document.getElementById("myTable") ;

    // building

    let trow = document.createElement("tr"); 
    let tdN = document.createElement("td");
    let tdP = document.createElement("td");
    let tdC = document.createElement("td");
    let tdI = document.createElement("td"); 

    let lName = document.createElement("label");
    let lPrice = document.createElement("label");
    let lCategory = document.createElement("label");
    let Pimge = document.createElement("img"); 


    lName.textContent=pN;
    tdN.appendChild(lName);
    trow.appendChild(tdN);
    productTable.appendChild(trow) ;


    lPrice.textContent=pP;
    tdP.appendChild(lPrice);
    trow.appendChild(tdP);
    productTable.appendChild(trow); 


    lCategory.textContent=pC;
    tdC.appendChild(lCategory);
    trow.appendChild(tdC);
    productTable.appendChild(trow);



    Pimge.src= pI;
    tdI.appendChild(Pimge);
    trow.appendChild(tdI);
    productTable.appendChild(trow);  

    Pimge.className="stylePic";
    tdN.className="styleTd" ;
    tdP.className="styleTd"; 
    tdC.className="styleTd"; 
    tdI.className="styleTd" ;


} 

function addToLocalStorage(obj) { 

    arr.push(obj);
    localStorage.setItem("table", JSON.stringify(arr));


} 


function getFromLocal(){
    if (localStorage.getItem("table")) {
        arr = JSON.parse(localStorage.getItem("table")) ;
        for (let i of arr) {
            addItem(i.pName , i.pPrice ,i.pCategory, i.pImag);
        }
    }
} 

getFromLocal();