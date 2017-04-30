import {EventDispatcher, PreDestroy, Injectable} from "quiver-framework";
import {EnterFrameEvent} from "../event/EnterFrameEvent";
/**
 * @author Kristaps Peļņa
 */
@Injectable()
export class EnterFrameManager {

    constructor(private eventDispatcher:EventDispatcher) {
        PIXI.ticker.shared.add(this.notifyEnterFrame, this);
    }

    private notifyEnterFrame(deltaTime:number):void {
        this.eventDispatcher.dispatchEvent(new EnterFrameEvent(deltaTime));
    }

    @PreDestroy()
    destroy() {
        PIXI.ticker.shared.remove(this.notifyEnterFrame, this);
    }
}
