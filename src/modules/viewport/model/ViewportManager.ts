import {ViewportSize} from "../data/ViewportSize";
import {EventDispatcher, Inject} from "quiver-framework";
/**
 * @author Kristaps Peļņa
 */
export class ViewportManager extends EventDispatcher implements ViewportSize {

    width:number = this.documentWidth;
    height:number = this.documentHeight;

    @Inject()
    private eventDispatcher:EventDispatcher;

    checkForSizeChange():void {
        const documentWidth:number = this.documentWidth;
        const documentHeight:number = this.documentHeight;

        if (documentWidth !== this.width || documentHeight !== this.height) {
            this.updateSize(documentWidth, documentHeight);
        }
    }

    private updateSize(documentWidth:number, documentHeight:number):void {
        this.width = documentWidth;
        this.height = documentHeight;

        this.eventDispatcher.dispatchEvent(ViewportSize.SIZE_CHANGED, this);
        this.dispatchEvent(ViewportSize.SIZE_CHANGED, this);
    }

    /**
     * Width of the document without toolbars.
     * @returns {number}
     */
    get documentWidth():number {
        return Math.floor(Math.min(window.innerWidth, document.documentElement.clientWidth));
    }

    /**
     * Height of the document without toolbars.
     * @returns {number}
     */
    get documentHeight():number {
        return Math.floor(Math.min(window.innerHeight, document.documentElement.clientHeight));
    }

}
