import {ViewportManager} from "../model/ViewportManager";
import {Injectable, Inject, Command} from "quiver-framework";
/**
 * @author Kristaps Peļņa
 */
@Injectable()
export class CheckDocumentSizeChange implements Command {

    @Inject()
    private viewportSizeManager:ViewportManager;

    execute():void {
        this.viewportSizeManager.checkForSizeChange();
    }
}
