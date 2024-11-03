interface IMediator {
    notify(sender: string, event: string): void;
}

abstract class Mediator {
    mediator: IMediator;

    setMediator(mediator: IMediator): void {
        this.mediator = mediator;
    }
}

class Notifications {
    send() {
        console.log('Sended!',)
    }
}

class LogM {
    log(message: string): void {
        console.log(message,)
    }
}

// BEWARE of multiple inheritance!
class EventHandler extends Mediator {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}

class NotificationMediator implements IMediator {
    constructor(
        public notification: Notifications,
        public logger: LogM,
        public handler: EventHandler,
    ) { }

    notify(_: string, event: string): void {
        switch (event) {
            case 'myEvent':
                this.notification.send();
                this.logger.log('Send');
                break;
        }
    }
}

const handler = new EventHandler();
const logger = new LogM();
const notifications = new Notifications();

const m = new NotificationMediator(
    notifications,
    logger,
    handler
);

handler.setMediator(m);
handler.myEvent();