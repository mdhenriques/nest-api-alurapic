import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class Usuario {
    id: number;

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