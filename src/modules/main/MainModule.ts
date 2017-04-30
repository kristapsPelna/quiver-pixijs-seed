import {Module, Injector, EventDispatcher} from "quiver-framework";
import {FullScreenRendererModule} from "../fullScreenRenderer/FullScreenRendererModule";
import {Stage} from "../fullScreenRenderer/view/Stage";
import {ApplicationState} from "./event/ApplicationState";
import {MainView} from "./view/MainView";
/**
 * @author Kristaps Peļņa
 */
@Module({
    requires:[
        FullScreenRendererModule
    ]
})
export class MainModule {

    constructor(private readonly injector:Injector,
                eventDispatcher:EventDispatcher) {
        eventDispatcher.addEventListener(ApplicationState.INITIALIZED, this.applicationStarted, this).once();
    }

    private applicationStarted():void {
        const stage:Stage = this.injector.get(Stage);

        stage.addChild(new MainView());
    }

}



