/**
 * @author Kristaps Peļņa
 */
export abstract class Renderer {

    abstract resize(screenWidth: number, screenHeight: number): void;
}
