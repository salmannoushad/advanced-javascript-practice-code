// import {
//     text
// } from './Shape.js'
// var s = `        salman 
// noushad 
//         bangladesh`
// console.log(s.trim())

// var age = 2
// var name = 'salman'
// console.log('my name is ' + name + 'i am ' + age + ' years old')
// console.log(`my name is ${name} i am ${age} years old. I am ${age<18? 'not' : ''} adult`)

// console.log(name.padStart(15, '*'))
// console.log(name.padEnd(15, '*'))
// console.log('S'.repeat(10))

// var vs let vs const

// let a = 10
// a = 100
// console.log(a)

// if (true) {
//     let a = 10
// }
// console.log(a)

// for (let i = 0; i < 5; i++) {

// }
// console.log(i)

// {
//     let iamlet = ' i am let'
// }
// console.log(iamlet)

// (function () {
//     var i = 'abc'
//     console.log(i)
// })()
// console.log(i)

// {
//     let abc = "abc"
// }
// console.log(abc)

// function add(a, b) {
//     return a + b
// }

// let add = (a, b) => a + b
// console.log(add(4, 5))

// let sqr = (x) => x * x
// console.log(sqr(5))

// function textMe() {
//     console.log(this)
// }
// textMe()
// let obj = {
//     name: 'salman',
//     print: () => {
//         console.log(this)
//     }
// }

// obj.print()

// function number(n) {
//     return n
// }
// console.log(number(33))

// // let nm = () => console.log(22)


// // console.log(nm())

// let nm = (n) => 10
// console.log(nm())

// var javascript = {
//     name: 'Js',
//     libraries: ['React', 'Angular', 'vue'],
//     printlibraries: function () {
//         this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))

//     }
// }

// javascript.printlibraries()

// function sqr(n = 1) {

//     return n * n

// }
// console.log(sqr(5))
// function greet(name = 'salman', msg = 'hello') {
//     console.log(name.length)
//     console.log(`${msg}! ${name}`)
// }

// greet(null, 'hello')

// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function () {
//         let currenValue = this.start
//         const self = this
//         return {
//             next() {

//                 return {
//                     done: currenValue > self.end,
//                     value: currenValue > self.end ? undefined : currenValue++

//                 }
//             }
//         }
//     }
// }
// // for (let v of obj) {
// //     console.log(v)
// // }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function sum(a, b, c) {
//     console.log(arguments)
// }

// sum(1, 2, 3)

// var arr = [1, 2, 3, 4, 9]
// var sum = arr.reduce(function (prev, curr) {
//     return prev + curr
// }, 100)
// console.log(sum)
// var max = arr.reduce(function (prev, curr) {
//     return Math.max(prev, curr)
// }, 0)
// console.log(max)


// function sum(...rest) {
//     return rest.reduce((a, b) => a + b)
// }
// console.log(sum(1, 2, 3, 4, 5))

// let a = [1, 2, 3]
// console.log(...a)

// let obj = {
//     a: 10,
//     b: 3,
//     c: 40
// }

// let obj2 = {
//     ...obj
// }
// console.log(obj2)
// console.log(obj)

// let a = 10,
//     b = 20
// let obj = {
//     a,
//     b,
//     print() {
//         console.log(this)
//     }
// }
// // console.log(obj)
// obj.print()


// var person = {
//     name: 'salman',
//     email: 'noushad@gmail.com',
//     address: {
//         city: 'dhaka',
//         country: 'BD'
//     }
// }

// let {
//     name: x,
//     email,
//     address: {
//         city,
//         country
//     }
// } = person
// console.log(name, email, city, country)
// let arr = [1, 2, 3, 4, 5]
// let [first, second, , , last] = arr
// console.log(first, second, last)
// console.log(x)

// var obj = {
//     a: 10,
//     b: 20
// }
// console.log(Object.entries(obj))

// var objArr = [
//     ['a', 10],
//     ['b', 80]
// ]

// console.log(Object.fromEntries(objArr))
// console.log(objArr)

// let createreact = function (height, width) {
//     return {
//         height,
//         width,

//         draw: function () {

//         },

//         printProper: function () {
//             console.log(this.width)
//             console.log(this.height)
//         }
//     }
// }

// let rect1 = createreact(4, 5)
// rect1.printProper()

// let s1 = Symbol()
// let s2 = Symbol('test symbol')
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2)

// var arr = [1, 5, 3]
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// function createIterator(collection){
//     return {
//         next(){
//             return{

//             }
//         }
//     }
// }
// const myArray = [1, 2, 3, 4, 5]

// for (let property in myArray) {
//     console.log(property)
// }

// function createIterator(collection) {
//     let i = 0

//     return {
//         next() {
//             return {
//                 done: i => collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr)

// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// let str = 'text'
// let iteratetext = str[Symbol.iterator]()
// console.log(iteratetext.next())
// console.log(iteratetext.next())
// console.log(iteratetext.next())
// console.log(iteratetext.next())
// console.log(iteratetext.next())

// let arr = [1, 2, 3]
// for (let v of arr) {
//     console.log(v)
// }
// for (let v of 'salman') {
//     console.log(v)
// }

// let obj = {
//     a: 10,
//     b: 20
// }
// let iterate = obj[Symbol.iterator]()
// for (let v of iterate) {
//     console.log(v)
// }

// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function* () {
//         let currentValue = this.start
//         while (currentValue <= this.end) {
//             yield currentValue++
//         }
//     }
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate() {
//     yield 1
//     yield 2
//     yield 3

// // }

// let arr = [1, 2, 3, 4, 5, 'salman']

// function* generate(collection) {
//     for (let i = 0; i < collection.length; i++) {
//         yield collection[i]
//     }
// }

// let it = generate(arr)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let set = new Set([1, 2, 3])
// let set = new Set([1, 2, 3])
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)
// console.log(set)
// console.log(set.size)
// set.clear()
// console.log(set)
// set.delete(5)
// console.log(set)
// console.log(set.keys())
// console.log(set.values())

// let keyIterate = set.keys()
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())

// for (let v of set) {
//     console.log(v)
// }
// console.log(set.entries())

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])
// map.set('d', 40)
// map.set({
//     name: 'salman'
// }, 23)
// map.delete('c')
// console.log(map)
// console.log(map.get('b'))
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

// for (let [k, v] of map) {
//     console.log(v, k)
// }

// map.forEach((v, k) => {
//     console.log(k, v)
// })


// let a = {
//         a: 10
//     },
//     b = {
//         b: 20
//     }
// let set = new Set([a, b])
// a = null
// console.log(set)

// let arr = [...set]
// console.log(arr[0])

// let weaksets = new WeakMap([a, 40][b, 40])
// console.log(weaksets)

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//         this.another = function () {}
//     }
//     name = 'salman'
//     draw() {
//         console.log('Drawing..')
//     }
// }
// let rect1 = new Rectangle(44, 55)
// console.log(rect1)


// class Person {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
//     print() {
//         console.log(this.name, this.email)
//     }
//     test() {
//         console.log(this)
//     }
//     static create(str) {
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email)
//     }

// }
// let str = '{"name":"Salman","email":"sal"}'

// let p1 = Person.create(str)
// console.log(p1)

// function Shape() {
//     this.draw = function () {
//         console.log(this)
//     }
// }

// let s1 = new Shape()
// let anotherDraw = s1.draw
// s1.draw()
// let test = p1.test
// test()

// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle {
//     constructor(radius) {
//             this[_radius] = radius
//         }
//         [_draw]() {
//             console.log('drawing...')
//         }
// }

// let c1 = new Circle(2)
// console.log(c1)
// c1.draw()
// let key = Object.getOwnPropertySymbols(c1)[0]
// console.log(c1[key])


// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()
// class Circle {
//     constructor(radius, name) {
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () => {
//             console.log(this.size)
//         })
//     }
//     get radius() {
//         return _radius.get(this)
//     }

//     set radius(v) {
//         _radius.set(this, v)
//     }
//     draw() {
//         console.log('drawing...')
//         console.log(_radius.get(this), _name.get(this))
//         _resize.get(this)()
//     }
// }

// let c1 = new Circle(2, 'cred')
// c1.draw()
// c1.radius = 100
// console.log(c1.radius)

// class Shape {
//     constructor(color) {
//         this.color = color
//     }
//     draw() {
//         console.log('Drawing...')
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width
//         this.height = height
//     }
//     draw() {
//         console.log('Drawing a rectangle...')
//     }
//     calculate() {
//         return this.width * this.height
//     }
// }
// import Rectangle from './Rectangle.js'

// let r = new Rectangle('green', 4, 5)
// console.log(r)
// r.draw()

// import {
//     text
// } from './Shape'

// console.log(text)

// import * as func from './func.js'
// console.log(func.add(45, 10))
// console.log(func.div(45, 10))

// import {
//     add,
//     sub
// } from './func.js'

// console.log(add(4, 3))

// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function* () {
//         let currentValue = this.start
//         while (currentValue < this.end) {
//             yield currentValue++
//         }
//     }
// }
// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generate() {
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }
// let arrs = [1, 2, 34]

// function* generate(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         yield arr[i]
//     }
// }

// let it = generate(arrs)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let set = new Set([1, 2, 3])
// let set = new Set([1, 2, 3])
// set.add(5)
// set.add(5)
// set.add(1)
// console.log(set.keys())
// console.log(set.values())

// let keyIterate = set.keys()
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())
// console.log(keyIterate.next())

// for (let v of set) {
//     console.log(v)
// }
// console.log(set.entries())

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])
// map.set('d', 50)
// map.set({
//     name: 'Salman'
// }, 50)
// console.log(map)
// console.log(map.get('a'))
// console.log(map.keys())
// console.log(map.values())
// console.log(map.entries())

// for (let [k, v] of map) {
//     console.log(v, k)
// }
// map.forEach((v, k) => {
//     console.log(k, v)
// })

// let a = {
//     a: 10

// }
// let b = {
//     b: 20
// }
// a = null
// let set = new Set([a, b])
// console.log(set)

// let arr = [...set]
// console.log(arr)
// console.log([arr[0]])

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//         this.another = function () {

//         }
//     }
//     name = 'salman'
//     draw() {
//         console.log('Drawing....')
//     }
//     test() {

//     }
// }

// let rect1 = new Rectangle(45, 33)
// console.log(rect1)

// function Shape() {
//     this.draw = function () {
//         console.log(this)
//     }
// }
// let s1 = new Shape()
// let anotherDraw = s1.draw
// anotherDraw()


// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _draw = Symbol()
// const _resize = new WeakMap()
// class Circle {
//     constructor(radius, name) {
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () => {
//             console.log(this.size)
//         })
//     }
//     get radius() {
//         return _radius.get(this)
//     }
//     set radius(v) {
//         _radius.set(this, v)
//     }
//     draw() {
//         console.log('drawing..')
//         console.log(_radius.get(this), _name.get(this))
//         _resize.get(this)()
//     }
// }
// let c1 = new Circle(2, 'sal')
// // console.log(c1)
// c1.draw()
// c1.radius = 100
// // let key = Object.getOwnPropertySymbols(c1)[1]
// // console.log(c1[key])
// console.log(c1.radius)

// class Shape {
//     constructor(color) {
//         this.color = color
//     }
//     draw() {
//         console.log('Drawing...')
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width
//         this.height = height
//     }
//     draw() {
//         console.log('drawing a rectangle.......')
//     }
//     calculate() {
//         return this.width * this.height
//     }
// }

// let r = new Rectangle('g', 4, 5)
// console.log(r)
// r.draw()

// console.log('I am line 1')

// setTimeout(() => {
//     console.log('I am line 2')
// }, 3000);
// setTimeout(() => {
//     console.log('I am line 3')
// }, 0);

// console.log('I am line 4')
// setTimeout(() => {
//     console.log('I am line 5')
// }, 1000);

// setTimeout(() => {
//     console.log('I have done')
// }, 1000);

// function sayMyName(name) {

//     setTimeout(() => {

//         console.log(name)
//     }, 3000);

// }

// sayMyName('Salman ') 

// const xhr = new XMLHttpRequest()
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')


// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//             let users = JSON.parse(xhr.response)

//             console.log(users)
//         } else {
//             console.log(xhr.status)
//         }
//     }
// }

// xhr.send()

// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             } else {
//                 callback(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()

// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//         // res.forEach(r => alert(r.name))

//     }
// })

// getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         res.forEach(r => console.log(r.title))
//     }
// })


// function myFunc(c, d) {
//     // console.log(this)
//     console.log(this.a + this.b + c + d)
// }
// myFunc.call({
//     a: 40,
//     b: 30
// }, 10, 4)
// myFunc.apply({
//     a: 400,
//     b: 300
// }, [10, 4])

// var testBind = myFunc.bind({
//     a: 7,
//     b: 3
// })

// testBind(5, 7)

// function sample(a, b, cb) {
//     var c = a + b
//     var d = a - b
//     var result = cb(c, d)
//     return result
// }

// var result = sample(4, 5, function (c, d) {
//     return c - d
// })
// console.log(result)

// var arr = [1, 2, 3, 4, 5]
// arr.forEach(function (value, index, arr) {
//     console.log(value, index, arr)
// })

// var arr = [1, 2, 3, 6, 74, 3, 4, 6, 3]
// var filArr = arr.filter(function (value) {
//     return value % 2 == 0
// })

// arr.sort()
// console.log(arr)

// console.log(filArr)a
// var result = arr.findIndex(function (value, index) {
//     return value == 74
// })
// console.log(result)




// let arr = [1, 2, 3, 4]
// let sqrArr = arr.map(v => v * v)

// console.log(sqrArr)

// function asynMap(arr, cb) {
//     return arr.map(v => {
//         // setTimeout(cb.bind(null, v), 0)
//         setTimeout(() => cb(v), 0)
//     })
// }

// let qbArr = asynMap(arr, v => {
//     console.log(v)
// })
// console.log(qbArr)
// const takeOrder = (customer, callback) => {
//     console.log(`Take order for ${customer}`)
//     callback(customer)
// }

// const processOrder = (customer, callback) => {
//     console.log(`processong order for ${customer}`)
//     setTimeout(() => {
//         console.log('cooking completed')
//         console.log(`Order processed for ${customer}`)
//         callback(customer)
//     }, 3000)


// }

// const completeOrder = (customer) => {
//     console.log(`Completed order for ${customer}`)
// }

// takeOrder('customer 1', (customer) => {
//     processOrder(customer, (customer) => {
//         completeOrder(customer)
//     })
// })

// console.log(`hello`)

// const hasMeeting = false

// const meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: 'Technical Meeting',
//             location: 'google meet',
//             time: '10pm'
//         }
//         resolve(meetingDetails)
//     } else {
//         reject(new Error("Metting already scheduled"))
//     }
// })

// const addToCalendar = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//         resolve(calendar)
//     })
// }

// const addToCalendar = (meetingDetails) => {
//     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//     return Promise.resolve(calendar)

// }

// meeting
//     .then(addToCalendar)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// console.log(`hello`)

// const promise1 = Promise.resolve(`Promise 1 resolved`)

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resoled`)
//     }, 2000)
// })

// promise1.then((res) => console.log(res))
// promise2.then((res) => console.log(res))
// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res)
// })

// Promise.race([promise1, promise2]).then((res) => {
//     console.log(res)
// })
// async function frinedlyFunction() {
//     return `hello`
// }
// console.log(frinedlyFunction())

// console.log(`hello`)

// const hasMeeting = false

// const meeting = new Promise((resolve, reject) => {
//     if (hasMeeting) {
//         const meetingDetails = {
//             name: 'Technical Meeting',
//             location: 'google meet',
//             time: '10pm'
//         }
//         resolve(meetingDetails)
//     } else {
//         reject(new Error("Metting already scheduled"))
//     }
// })

// const addToCalendar = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//         resolve(calendar)
//     })
// }

// const addToCalendar = (meetingDetails) => {
//     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//     return Promise.resolve(calendar)

// }

// meeting
//     .then(addToCalendar)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// async function myMeeting() {
//     try {
//         const meetingDetails = await meeting
//         const calendar = await addToCalendar(meetingDetails)
//         console.log(calendar)
//     } catch {
//         console.log('some thing wrong')
//     }

// }
// myMeeting()

// console.log('hello world')

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'one')
// })
// console.log(p1)

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'two')
// })
// // console.log(p2)
// p1.then((v) => {
//     console.log(v)
// }).catch((e) => {
//     console.log(e)
// })

// p2.then((v) => {
//     console.log(v)
// })

// function getIphone(isPassed) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isPassed) {
//                 resolve('I have got an Iphone')
//             } else {
//                 reject(new Error('You have failed'))
//             }
//         }, 2000)
//     })

// }

// console.log(getIphone(false))

// getIphone(false)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err.message)
//     })

// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             } else {
//                 callback(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()

// }



// fetch(`${BASE_URL}/users/1`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         return Promise.resolve('something')
//     })
//     .then(str => {
//         console.log(str)
//         return Promise.resolve('Another Resolve')
//     })
//     .then(another => {
//         console.log(another)
//     })
//     .catch(e => {
//         console.log(e)
//     })


// function getRequest(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.open('get', url)

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             } else {
//                 callback(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()

// }
// const BASE_URL = 'https://jsonplaceholder.typicode.com'

// function getRequest(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//         xhr.open('get', url)

//         xhr.onreadystatechange = function (e) {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     let response = JSON.parse(xhr.response)
//                     resolve(response)
//                 } else {
//                     reject(new Error('New Occured'))
//                 }
//             }
//         }
//         xhr.send()
//     })
// }

// getRequest(`${BASE_URL}/users/1564`)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(e => {
//         console.log(e.message)
//     })


// const delay = s => new Promise(resolve => setTimeout(resolve, s * 1000))


// delay(2).then(() => console.log('2 Seconds Delay'))
// delay(1).then(() => console.log('1 Seconds Delay'))
// delay(3).then(() => console.log('3 Seconds Delay'))
// delay(2).then(() => console.log('2 Seconds Delay'))
// delay(5).then(() => console.log('5 Seconds Delay'))

// let p1 = Promise.resolve('Test')
// // console.log(p1)
// p1.then(v => console.log(v))

// let p2 = Promise.reject('Reject')
// p2.catch(e => console.log(e))

// let p1 = Promise.resolve('ONe')
// let p2 = Promise.resolve('two')
// let p3 = Promise.resolve('three')

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr => {
//         console.log(arr)
//     })

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, 'one')
// })

// let p2 = new Promise(resolve => {
//     setTimeout(resolve, 3000, 'two')
// })

// let p3 = new Promise(resolve => {
//     setTimeout(resolve, 4000, 'one')
// })

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr => console.log(arr))

// Promise.race(promiseArr)
//     .then(v => console.log(v))


// async function test() {
//     return 'test'
// }
// console.log(test())
// test().then(v => alert(v))

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 5000, 'Test Value')
// })

// async function myAsyncFunc() {
//     // p1.then(v => alert(v))
//     let v = await p1
//     console.log(v)
// }

// myAsyncFunc()

// async function fetchData() {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await res.json()
//         let names = data.map(u => u.name)
//         console.log(names)
//     } catch (e) {
//         console.log(e.mssage)
//     }
// }

// fetchData()

// let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
// async function promiseAll() {
//     let result = await Promise.all(promises)
//     console.log(result)
// }

// promiseAll()

// let asyncIterable = {
//     [Symbol.asyncIterator]() {
//         let i = 0
//         return {
//             next() {
//                 if (i < 5) {
//                     return Promise.resolve({
//                         value: i++,
//                         done: false
//                     })
//                 } else {
//                     return Promise.resolve({
//                         done: true
//                     })
//                 }
//             }
//         }
//     }
// }

// let iterate = asyncIterable[Symbol.asyncIterator]();

// (async function () {
//     // let v = await iterate.next()
//     // console.log(v)
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
//     console.log(await iterate.next())
// })()
// console.log(iterate.next())

// (async function () {
//     for await (let v of asyncIterable) {
//         console.log(v)
//     }
// })()


// async function* myAsyncGenerator() {
//     let i = 0
//     while (true) {
//         if (i > 5) return
//         yield await Promise.resolve(i++)
//     }
// }


// ;
// (async function () {
//     for await (let v of myAsyncGenerator()) {
//         console.log(v)
//     }
// })()

// let title = document.getElementById('title')
// console.log(title)

// let paragraphs = document.getElementsByClassName('lead')
// console.log(paragraphs)

// let listelement = document.getElementsByTagName('li')
// console.log(listelement)
// let listitemOne = document.getElementsByName('list-item-one')
// console.log(listitemOne)

// let title = document.querySelector('#title')
// console.log(title)

// let para = document.querySelector('.lead')
// console.log(para)

// let parap = document.querySelectorAll('.lead')
// console.log(parap)

// let tagname = document.querySelectorAll('li')
// console.log(tagname)

// let listitemone = document.querySelector(['name' = 'list-item-one'])
// console.log(listitemone)

// let li1 = document.getElementsByTagName('li')

// let li2 = document.querySelectorAll('li')

// console.log(li1.constructor.name)
// console.log(li2.constructor.name)

// let list = document.getElementById('list')
// let parent = list.parentElement
// console.log(parent)

// let children = list.children
// console.log(children)

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)

// let li = document.querySelector('li')
// console.log(li.nextElementSibling)

// console.log(list.firstElementChild)
// console.log(list.lastElementChild)


// let listItem = document.getElementsByTagName('li')
// console.log(listItem)
// let listitems = Array.from(listItem)
// console.log(listitems)

// let listitems = [...listItem]

// listitems.forEach((li, index) => {
//     let text = li.innerHTML
//     li.innerHTML = `(${index+1} ${text})`
// })

// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.setAttribute('titile', 'I am Fourth Item')
// li.innerHTML = 'Four'

// let list = document.getElementById('list')
// list.appendChild(li)



// let li = createElement('li', 'list-group-item', 'Four')
// li.setAttribute('title', 'I am fourth item')

// let list = document.getElementById('list')
// list.appendChild(li)

// let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, debitis voluptatucumque autemdeleniti modi, non porro voluptate nemo quasi accusamus molestiae odit illum, optio est numquamvero. Nemo, dolor!')
// let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, debitis voluptatucumque autemdeleniti modi, non porro voluptate nemo quasi accusamus molestiae odit illum, optio est numquamvero. Nemo, dolor!')



// let div = createElement('div')
// append(div, [p1, p2])
// console.log(div)

// list.insertAdjacentElement('beforeend', div)
// // let content = document.getElementById('contents')
// // content.appendChild(div)


// function createElement(tagname, className, innerHTML) {
//     let tag = document.createElement(tagname)
//     tag.innerHTML = innerHTML || ''
//     tag.className = className || ''
//     return tag
// }

// function append(parent, children) {
//     children.forEach(child => parent.appendChild(child))
// }




//remove and update
// let firstChild = list.firstElementChild
// console.log(firstChild)
// setTimeout(() => {
//     firstChild.innerHTML = firstChild.innerHTML + '(modified)'
//     // firstChild.classList.add('text-success')
//     firstChild.style.background = 'black'
// }, 5000)

// setTimeout(() => {
//     list.lastChild.remove()
// }, 3000)

// let lastitem = list.lastElementChild.cloneNode(true)
// lastitem.innerHTML = 'Five'
// list.appendChild(lastitem)

// console.log(list.attributes)
// console.log(list.getAttributeNames())
// console.log(list.getAttributeNode('class'))
// console.log(list.getAttributeNames('id'))
// console.log(list.getAttribute('class'))

// console.log(list.classList)

// lastitem.id = 'last-itemo'
// lastitem.setAttribute('id', 'last-itemone')
// let attr = document.createAttribute('title')
// attr.value = 'i am title'
// lastitem.setAttributeNode(attr)

// let title = document.getElementById('title')
// title.style.color = 'Orange'
// title.style.fontSize = '4rem'
// title.style.background = 'lightgrey'
// console.log(title.style)

// let styleObj = {
//     background: 'black',
//     fontSize: '30px',
//     color: 'blue'
// }
// let list = document.getElementById('list');

// [...list.children].forEach(li => Object.assign(li.style, styleObj))
// Object.assign(list.style, styleObj)

// console.dir(btn)
// btn.onclick = function (e) {
//     console.log(e)
// }
// let list = document.getElementById('list')
// let btn = document.getElementById('btn')

// btn.addEventListener('click', function (e) {
//     let item = list.lastElementChild.cloneNode(true)
//     item.innerHTML = 'Newly created item'
//     list.appendChild(item)
// });


// [...list.children].forEach(li => {
//     li.onclick = function (e) {
//         e.target.remove()
//     }
// })

// list.addEventListener('click', function (e) {
//     if (this.contains(e.target)) {
//         e.target.remove()
//     }
// })


// let box = document.getElementById('box')


// box.addEventListener('mousemove', function (e) {
//     document.getElementById('x-value').innerHTML = e.clientX
//     document.getElementById('y-value').innerHTML = e.clientY
// })

// let name = document.getElementById('name')

// name.addEventListener('keypress', function (event) {
//     if (event.key == 'Enter') {
//         document.getElementById('show-name').innerHTML = `Your Name is ${event.target.value}`
//         event.target.value = ''
//     }
// })

// let skills = document.getElementsByName('skills')
// let result = document.getElementById('result')

// let checkedSkills = [];

// [...skills].forEach(skill => {
//     skill.addEventListener('change', function (event) {
//         if (event.target.checked) {
//             checkedSkills.push(event.target.value)
//             outputSkills(result, checkedSkills)
//         } else {
//             let ind = checkedSkills.indexOf(event.target.value)
//             checkedSkills.splice(ind, 1)
//             outputSkills(result, checkedSkills)
//         }
//     })
// })

// function outputSkills(parent, skills) {
//     let result = ''
//     skills.forEach((skill, index) => {
//         result += `(${index+1}) ${skill}  `
//     })
//     parent.innerHTML = result
// }

// let list = document.getElementById('list')
// list.addEventListener('dblclick', function (event) {
//     if (this.contains(event.target)) {
//         let innerText = event.target.innerText
//         event.target.innerHTML = ''
//         let inputBox = createInputBox(innerText)
//         event.target.appendChild(inputBox)

//         inputBox.addEventListener('keypress', function (e) {
//             if (e.key == 'Enter') {
//                 event.target.innerHTML = e.target.value
//             }
//         })

//     }
// })

// function createInputBox(value) {
//     let inp = document.createElement('input')
//     inp.type = 'text'
//     inp.className = 'form-control'
//     inp.value = value
//     return inp
// }
let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log(this.elements[0])
    // console.log(this['email'])
    let isValid = false
    let formData = {};
    [...this.elements].forEach(el => {
        if (el.type !== 'submit') {
            isValid = validator(el)
            if (isValid) {
                formData[el.name] = el.value
            } else {
                el.classList.add('is-invalid')
                alert(`${el.name} is required`)
            }

        }
    })
    if (isValid) {
        console.log(formData)
        this.reset()
    }
})

function validator(el) {
    if (!el.value) {
        return false
    }
    return true
}