import {EventDispatcher} from "quiver-framework";

export class ViewportSize extends EventDispatcher {

  static readonly SIZE_CHANGED:string = "viewportSizeChangedEvent";

  readonly width:number;
  readonly height:number;

}
