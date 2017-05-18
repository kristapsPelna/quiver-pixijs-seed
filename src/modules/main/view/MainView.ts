import Container = PIXI.Container;
import Sprite = PIXI.Sprite;
import Texture = PIXI.Texture;

/**
 * @author Kristaps Peļņa
 */
export class MainView extends Container {

    constructor() {
        super();

        require("./../../../../assets/logo.png");

        this.addChild(Sprite.from("assets/logo.png"));
    }
}
