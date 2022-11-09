fetch("http://localhost:3000/book/showTrip").then(res=>res.json()).then(data=>{

    console.log(data)
    if(data.length){
        let somme =     0
    
        for(let i=0;i<data.length;i++){
    
            
            //afficher les données dans le panier
            let hourFromDate = data[i].date
            let hourFrom = hourFromDate.split("T")
            let hour = hourFrom[1]  
            let hourAndMinute = hour.split(":")
            let hourOnly = hourAndMinute[0]
            let hourFromNow = new Date().getHours()
            let minuteOnly = hourAndMinute[1]
            let differenceHour = hourOnly - hourFromNow
            let hourAndMinuteOnly = hourOnly+":"+minuteOnly
            document.querySelector(".cart-list").innerHTML += `<li class="list-group-item"><span>${data[i].departure} > ${data[i].arrival}</span><span>${hourAndMinuteOnly} </span><span>${data[i].price}€</span>Departure in ${differenceHour} H<span></span></li> `
            
        }
    }else{
        document.querySelector(".cart-list").innerHTML += `<li class="list-group-item-panier-vide">Votre panier est vide</li> `
    }
    
}
)