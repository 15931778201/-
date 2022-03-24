"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log(this.name + ' say Hello');
    };
    return Person;
}());
var person = new Person();
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.sayBye = function () {
        this.name;
    };
    return Teacher;
}(Person));
var Persona = (function () {
    function Persona(name) {
        this.name = name;
    }
    return Persona;
}());
var persona = new Persona('jspang');
persona.name = '谢广坤';
var Teachera = (function (_super) {
    __extends(Teachera, _super);
    function Teachera(age) {
        var _this = _super.call(this, 'jspang') || this;
        _this.age = age;
        return _this;
    }
    return Teachera;
}(Persona));
var teacher = new Teachera(18);
var Xiaojiejie = (function () {
    function Xiaojiejie(_age) {
        this._age = _age;
    }
    Object.defineProperty(Xiaojiejie.prototype, "age", {
        get: function () {
            return this._age - 10;
        },
        set: function (age) {
            this._age = age + 3;
        },
        enumerable: false,
        configurable: true
    });
    return Xiaojiejie;
}());
var xiaoli = new Xiaojiejie(28);
var Girl = (function () {
    function Girl() {
    }
    Girl.sayLove = function () {
        return "I Love you";
    };
    return Girl;
}());
var Personb = (function () {
    function Personb(name) {
        this._name = name;
    }
    return Personb;
}());
var Girlb = (function () {
    function Girlb() {
    }
    return Girlb;
}());
var Waiter = (function (_super) {
    __extends(Waiter, _super);
    function Waiter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Waiter.prototype.skill = function () {
        console.log('大爷，请喝水！');
    };
    return Waiter;
}(Girl));
var BaseTeacher = (function (_super) {
    __extends(BaseTeacher, _super);
    function BaseTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTeacher.prototype.skill = function () {
        console.log('大爷，来个泰式按摩吧！');
    };
    return BaseTeacher;
}(Girl));
var seniorTeacher = (function (_super) {
    __extends(seniorTeacher, _super);
    function seniorTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    seniorTeacher.prototype.skill = function () {
        console.log('大爷，来个SPA全身按摩吧！');
    };
    return seniorTeacher;
}(Girl));
