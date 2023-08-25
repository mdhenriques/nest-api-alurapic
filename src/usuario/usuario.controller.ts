import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";
import { error } from "console";

@Controller('users')
export class UsuarioController {

    
    constructor(private usuarioService: UsuarioService) {}

    
    @Post()
    public cria(@Body() usuario: Usuario) {
        throw new Error('Erro no cadastro de usuario');
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }
    
    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)

        return usuarioEncontrado;
    }
}