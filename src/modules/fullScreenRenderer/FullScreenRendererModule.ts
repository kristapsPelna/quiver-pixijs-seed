import {Module, Injector} from "quiver-framework";
import {ResizeRenderer} from "./controller/ResizeRenderer";
import Application = PIXI.Application;
import {Renderer} from "./view/Renderer";
import {ViewportSize} from "../viewport/data/ViewportSize";
import {ViewportModule} from "../viewport/ViewportModule";
import {Stage} from "./view/Stage";
import Container = PIXI.Container;
/**
 * @author Kristaps Peļņa
 */
@Module({
    requires:[
        ViewportModule
    ],
    commandMap:[
        {
            event: ViewportSize.SIZE_CHANGED,
            command: ResizeRenderer
        }
    ]
})
export class FullScreenRendererModule {

    constructor(injector:Injector, viewportSize:ViewportSize) {

        const app:Application = new Application(viewportSize.width, viewportSize.height, {
            backgroundColor: 0x1099bb
        });
        document.body.appendChild(app.view);

        const stage:Container = new Container();
        stage.name = "stage";
        app.stage.addChild(stage);

        /*stage.width = viewportSize.width;
        stage.height = viewportSize.height;

        //Resize stage to be full screen
        viewportSize.addEventListener(ViewportSize.SIZE_CHANGED, () => {
            stage.width = viewportSize.width;
            stage.height = viewportSize.height;
        });*/

        injector.map(Renderer as any).toValue(app.renderer);
        injector.map(Stage).toValue(stage);
    }
}
