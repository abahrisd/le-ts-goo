// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
//     printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
//     выводящий сначала дату, а потом заданное сообщение

abstract class LoggerT {
    abstract log(message: string): void;

    printDate(date: Date): void {
        this.log(date.toString())
    }
}

class RealLogger extends LoggerT {
    log(message: string): void {
        console.log(message);
    }

    logWithDate(message: string, date?: Date): void {
        this.printDate(date ?? new Date());
        this.log(message);
    }
}

const test6 = new RealLogger();
test6.logWithDate('messgae');

