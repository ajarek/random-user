export class User {
    constructor(picture, name, email, age, city, phone, password) {
        this.picture = picture;
        this.name = name;
        this.email = email;
        this.age = age;
        this.city = city;
        this.phone = phone;
        this.password = password;
    }
    showUser(text, data) {
        const div = document.createElement('div');
        div.classList.add('data-user');
        div.innerHTML = `<p class="desc">${text}</p>
        <h1 class="info">${data}</h2>`;
        const row = document.querySelector('.row');
        row.innerHTML = '';
        row.appendChild(div);
    }
}
