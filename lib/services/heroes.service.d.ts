import { Hero, Heroes } from '../models';
import * as i0 from "@angular/core";
export declare class HeroesService {
    constructor();
    getAll(): Heroes;
    getHero(id: number): Hero;
    static ɵfac: i0.ɵɵFactoryDef<HeroesService>;
    static ɵprov: i0.ɵɵInjectableDef<HeroesService>;
}
