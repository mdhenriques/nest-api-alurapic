import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";
import { Exclude } from "class-transformer";

export class Usuario {
    id: number;

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

    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'Senha e obrigatoria'
    })
    senha: string;

    @IsNotEmpty({
        message: 'Nome completo e obrigatorio'
    })
    nomeCompleto: string;

    dataDeEntrada: Date;
}