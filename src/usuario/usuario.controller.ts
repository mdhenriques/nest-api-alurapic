import { Body, Controller, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller('users')
export class UsuarioController {

    
    constructor(private usuarioService: UsuarioService) {}

    @Post()
    public cria(@Body() usuario: Usuario) {
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }
}