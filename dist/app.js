var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "./class-user.js";
const foto = document.querySelector('.foto img');
const buttons = document.querySelectorAll('.btn-icons button');
const url = "https://randomuser.me/api/";
const randomUser = document.querySelector('#random');
let arr = [];
randomNewUser();
function showUser(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const userArr = new User(arr[0].picture, arr[0].name, arr[0].email, arr[0].age, arr[0].city, arr[0].phone, arr[0].password);
        const target = e.target;
        if (target.id === 'user') {
            userArr.showUser("My name is:", userArr.name);
        }
        if (target.id === 'email') {
            userArr.showUser("My email is:", userArr.email);
        }
        if (target.id === 'age') {
            userArr.showUser("My age is:", userArr.age);
        }
        if (target.id === 'city') {
            userArr.showUser("My city is:", userArr.city);
        }
        if (target.id === 'phone') {
            userArr.showUser("My phone is:", userArr.phone);
        }
        if (target.id === 'password') {
            userArr.showUser("My password is:", userArr.password);
        }
    });
}
function randomNewUser() {
    return __awaiter(this, void 0, void 0, function* () {
        arr = [];
        const res = yield fetch(url);
        const data = yield res.json();
        const newUser = data.results[0];
        const user = new User(newUser.picture.medium, newUser.name.first, newUser.email, newUser.registered.age, newUser.location.city, newUser.phone, newUser.login.password);
        arr.push(user);
        foto.setAttribute('src', arr[0].picture);
        const desc = document.querySelector('.desc');
        desc.innerHTML = `My name is: `;
        const info = document.querySelector('.info');
        info.innerHTML = ` ${arr[0].name}`;
    });
}
buttons.forEach(el => {
    el.addEventListener('click', showUser);
});
randomUser.addEventListener('click', randomNewUser);
