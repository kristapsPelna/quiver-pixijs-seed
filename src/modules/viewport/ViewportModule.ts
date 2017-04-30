import {ViewportManager} from "./model/ViewportManager";
import {ViewportSize} from "./data/ViewportSize";
import {Module} from "quiver-framework";
import {EnterFrameEvent} from "../enterFrame/event/EnterFrameEvent";
import {CheckDocumentSizeChange} from "./controller/CheckDocumentSizeChange";
import {EnterFrameModule} from "../enterFrame/EnterFrameModule";

@Module({
    requires:[
        EnterFrameModule,
    ],
    mappings: [
        ViewportManager,
        {
            map: ViewportSize,
            useExisting: ViewportManager
        }
    ],
    commandMap:[
        {
            event: EnterFrameEvent.TYPE,
            command: CheckDocumentSizeChange
        }
    ]
})
export class ViewportModule {

}
