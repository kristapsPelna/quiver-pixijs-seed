import {Event} from "quiver-framework";
/**
 * @author Kristaps Peļņa
 */
export class EnterFrameEvent extends Event {

    /**
     * Enter frame event
     */
    static readonly TYPE:string = "enterFrame";

    /**
     * Time passed since the previous frame
     */
    readonly data:number;

    constructor(deltaTime:number) {
        super(EnterFrameEvent.TYPE, deltaTime);
    }

}
