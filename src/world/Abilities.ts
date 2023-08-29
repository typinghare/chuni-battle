import { Registries } from '../core/Registries.ts'
import { Builtins } from '../core/Builtins.ts'
import { Ability } from './ability/Ability.ts'
import { SingleEnemyAbility } from './ability/SingleEnemyAbility.ts'
import { Effects } from './Effects.ts'

/**
 * Builtin abilities.
 */
export class Abilities {
    public static readonly TACKLE = Abilities.register('tackle', new SingleEnemyAbility({
        name: 'tackle',
        isSpell: false,
        effectList: [
            [Effects.HEAL_1],
            [Effects.HEAL_2],
            [Effects.HEAL_3],
        ],
    }))

    /**
     * Registers an ability.
     * @param path The path of the ability
     * @param ability The ability to register
     * @private
     */
    private static register(path: string, ability: Ability): Ability {
        return Registries.ABILITY.register(Builtins.RESOURCE_LOCATION_BUILDER.create(path), ability)
    }
}