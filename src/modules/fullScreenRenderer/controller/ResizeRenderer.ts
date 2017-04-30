import {Injectable, Command} from "quiver-framework";
import {ViewportSize} from "../../viewport/data/ViewportSize";
import {Renderer} from "../view/Renderer";
/**
 * @author Kristaps Peļņa
 */
@Injectable()
export class ResizeRenderer implements Command {

    constructor(private viewportSize:ViewportSize,
                private renderer:Renderer) {
    }

    execute():void {
        if (this.renderer) {
            this.renderer.resize(this.viewportSize.width, this.viewportSize.height);
        }
    }
}
