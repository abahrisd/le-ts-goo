class DocumentItem {
    public text: string;
    private state: DocumentItemState;

    constructor() {
        this.setState(new DraftDocumentItemState());
    }

    getState() {
        return this.state;
    }

    setState(state: DocumentItemState) {
        this.state = state;
        this.state.setContext(this);
    }

    publishDoc() {
        this.state.publish();
    }

    deleteDoc() {
        this.state.delete();
    }
}

abstract class DocumentItemState {
    public name: string;
    public item: DocumentItem;

    setContext(item: DocumentItem) {
        this.item = item;
    }

    public abstract publish(): void;
    public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDoc';
    }

    delete(): void {
        console.log('Draft deleted',)
    }

    publish(): void {
        console.log('From Draft to publish!',)
        this.item.setState(new PublishDocumentItemState());
    }
}

class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublisedDoc';
    }

    delete(): void {
        console.log('From publish to draft!',)
        this.item.setState(new DraftDocumentItemState());
    }

    publish(): void {
        console.log('Unable to publish',)
    }
}

const item = new DocumentItem();
item.text = 'My post';
console.log('Item state', item.getState());
item.publishDoc();
console.log('Item state', item.getState());
item.deleteDoc();
console.log('Item state', item.getState());