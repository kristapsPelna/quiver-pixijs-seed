import {Module} from "quiver-framework";
import {EnterFrameManager} from "./model/EnterFrameManager";

@Module({
    mappings: [
        {
            map: EnterFrameManager,
            instantiate: true
        }
    ]
})
export class EnterFrameModule {

}
