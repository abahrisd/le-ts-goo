"use strict";
// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
//     printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
//     выводящий сначала дату, а потом заданное сообщение
class LoggerT {
    printDate(date) {
        this.log(date.toString());
    }
}
class RealLogger extends LoggerT {
    log(message) {
        console.log(message);
    }
    logWithDate(message, date) {
        this.printDate(date !== null && date !== void 0 ? date : new Date());
        this.log(message);
    }
}
const test6 = new RealLogger();
test6.logWithDate('messgae');
