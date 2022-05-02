export class User {
    picture:string
     name: string
     email: string
     age: number
     city: string
     phone: number
    password: string
    constructor(picture:string, name: string,email: string,age:number,city:string,phone:number, password: string,) {
        this.picture = picture
        this.name = name
        this.email = email
        this.age = age
        this.city = city
        this.phone = phone          
        this.password = password
    }
    showUser(text: string,data: string|number) {
        const div = document.createElement('div')
        div.classList.add('data-user')
        div.innerHTML = `<p class="desc">${text}</p>
        <h1 class="info">${data}</h2>`
        const row = document.querySelector('.row') as HTMLElement
        row.innerHTML = ''
        row.appendChild(div)
    }
}
