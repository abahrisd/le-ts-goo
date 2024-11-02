class Notify {
    send(template: string, to: string): void {
        console.log(`Sending ${template} to ${to}`,)
    }
}

class Log {
    log(message: string): void {
        console.log('Message',message);
    }
}

class Template {
    private templates = [
        { name: 'name', template: '<h1>Header</h1>'}
    ]

    getByName(name: string){
        return this.templates.find(template => template.name === name);
    }
}

class NotificationFacade {
    private notify: Notify;
    private logger: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }

    send(to: string, templateName: string): void {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('Template is not found!')
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log('Message sent');
    }
}

const s = new NotificationFacade();
s.send('mail@mail.dev', 'name');