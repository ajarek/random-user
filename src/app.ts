import { User } from "./class-user.js"
const foto= document.querySelector('.foto img') as HTMLImageElement
const buttons= document.querySelectorAll('.btn-icons button') as NodeListOf<HTMLButtonElement>
const url="https://randomuser.me/api/"
const randomUser= document.querySelector('#random') as HTMLButtonElement
let arr:User[]=[]
randomNewUser()

async function showUser(e:Event){

   const userArr=new User(arr[0].picture, arr[0].name,arr[0].email,arr[0].age,arr[0].city,arr[0].phone,arr[0].password)
    const target=e.target as HTMLButtonElement
   
    if(target.id==='user'){
        userArr.showUser("My name is:",userArr.name)    
    }
    if(target.id==='email'){
       userArr.showUser("My email is:",userArr.email)
    }
    if(target.id==='age'){
        userArr.showUser("My age is:",userArr.age)
    }
    if(target.id==='city'){
        userArr.showUser("My city is:",userArr.city)
    }
    if(target.id==='phone'){
        userArr.showUser("My phone is:",userArr.phone)
    }
    if(target.id==='password'){
        userArr.showUser("My password is:",userArr.password)
    }   
}

async function randomNewUser(){
    arr=[]
    const res = await fetch(url)
    const data = await res.json()
    const newUser = data.results[0]
    const user = new User(newUser.picture.medium,newUser.name.first,newUser.email, newUser.registered.age, newUser.location.city, newUser.phone,newUser.login.password )
   arr.push(user)
   foto.setAttribute('src',arr[0].picture)
const desc=document.querySelector('.desc')as HTMLElement
   desc.innerHTML=`My name is: `
   const info=document.querySelector('.info')as HTMLElement
    info.innerHTML=` ${arr[0].name}` 
}

buttons.forEach(el=>{
    el.addEventListener('click',showUser)
})

randomUser.addEventListener('click',randomNewUser)
