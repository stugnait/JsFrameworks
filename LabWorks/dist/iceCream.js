"use strict";
var _a;
function calculateIceCreamCost() {
    var _a, _b;
    var small_cup_cost = 10;
    var large_cup_cost = 25;
    var marshmello_cost = 5;
    var topping_cost = {
        chocolate: 5,
        caramel: 6,
        berries: 10,
    };
    var cupSize = (_a = prompt("Виберіть розмір стаканчика (s або l):")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    var totalCost = 0;
    if (cupSize === "s") {
        totalCost += small_cup_cost;
    }
    else if (cupSize === "l") {
        totalCost += large_cup_cost;
    }
    else {
        alert("Неправильний вибір розміру стаканчика");
        return;
    }
    var toppingsInput = prompt("Виберіть начинку (chocolate, caramel, berries). Введіть через кому, якщо кілька:");
    if (toppingsInput) {
        var toppings = toppingsInput.split(",").map(function (topping) { return topping.trim().toLowerCase(); });
        for (var _i = 0, toppings_1 = toppings; _i < toppings_1.length; _i++) {
            var topping = toppings_1[_i];
            if (topping_cost[topping]) {
                totalCost += topping_cost[topping];
            }
            else {
                alert("\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \"".concat(topping, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430"));
                return;
            }
        }
    }
    else {
        alert("Необхідно вибрати принаймні одну начинку");
        return;
    }
    var addMarshmallow = (_b = prompt("Чи бажаєте додати маршмелоу? (y або n):")) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    if (addMarshmallow === "y") {
        totalCost += marshmello_cost;
    }
    alert("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(totalCost, " \u0433\u0440\u043D"));
}
(_a = document.getElementById('calculate-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', calculateIceCreamCost);
//# sourceMappingURL=iceCream.js.map