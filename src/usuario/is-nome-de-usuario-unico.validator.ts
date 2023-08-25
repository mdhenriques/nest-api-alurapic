import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";

@ValidatorConstraint()
class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        
    }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions){
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeDeUsuarioUnicoConstraint,
        })
    }
}