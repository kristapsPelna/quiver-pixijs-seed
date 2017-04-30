import Application = PIXI.Application;
import {WebApplicationContext, Context, ContextLifecycleEvent, EventDispatcher} from "quiver-framework";
import {MainModule} from "./main/MainModule";
import {ApplicationState} from "./main/event/ApplicationState";

export class Main {

    private readonly context:Context = new WebApplicationContext();

    constructor() {
        console.debug("Main class");

        this.context.addEventListener(ContextLifecycleEvent.POST_INITIALIZE, this.onContextInitialized, this).once();
        this.context.configure(MainModule).initialize();
    }

    private onContextInitialized():void {
        const eventDispatcher:EventDispatcher = this.context.injector.get(EventDispatcher);
        eventDispatcher.dispatchEvent(ApplicationState.INITIALIZED);
    }

}
