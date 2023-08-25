import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";
import { Exclude, Expose } from "class-transformer";

export class Usuario {
    id: number;

    @Expose({
        name: 'username'
    })
    @IsNomeDeUsuarioUnico({
        message: 'Nome de usuario deve ser unico'
    })
    @IsNotEmpty({
        message: 'Nome de usuario e obrigatorio'
    })
    @IsString({
        message: 'Nome de usuario precisa ser uma string'
    })
    nomeDeUsuario: string;

    @IsEmail({}, {
        message: 'Email tem que ser valido'
    })
    email: string;

    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'Senha e obrigatoria'
    })
    senha: string;

    @Expose({
        name: 'fullName'
    })
    @IsNotEmpty({
        message: 'Nome completo e obrigatorio'
    })
    nomeCompleto: string;

    @Expose({
        name: 'joinDate'
    })
    dataDeEntrada: Date;
}