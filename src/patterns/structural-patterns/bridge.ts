interface IProvider {
    sendMessage(message: string): void;
    connect(config: string): void;
    disconnect(): void;
}

class TelegramProvider implements IProvider {
    connect(config: string): void {
        console.log('config Telegram',config);
    }

    disconnect(): void {
        console.log('Disconnected Telegram',);
    }

    sendMessage(message: string): void {
        console.log('Send Telegram',message);
    }
}

class WhatsappProvider implements IProvider {
    connect(config: string): void {
        console.log('config Whatsapp',config);
    }

    disconnect(): void {
        console.log('Disconnected Whatsapp',);
    }

    sendMessage(message: string): void {
        console.log('Send Whatsapp',message);
    }
}

class NotificationSender {
    constructor(private provider: IProvider) {

    }

    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('Send!');
        this.provider.disconnect();
    }
}

class DelayedNotificationSender extends NotificationSender {
    constructor(provider: IProvider) {
        super(provider);
    }

    sendDelayed() {
        //
    }
}

const senderT = new NotificationSender(new TelegramProvider());
senderT.send();

const senderW = new NotificationSender(new WhatsappProvider());
senderW.send();
senderW.send();