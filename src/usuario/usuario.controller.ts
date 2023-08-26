import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";
import { error } from "console";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";

@Controller('users')
export class UsuarioController {

    
    constructor(private usuarioService: UsuarioService) {}

    
    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        
        const usuarioCriado = this.usuarioService.cria(usuario);

        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${usuarioCriado.nomeDeUsuario}`
            })
            .comBody(usuarioCriado)
            .build();
        //res.status(HttpStatus.CREATED)
        //    .location(`/users/${usuarioCriado.nomeDeUsuario}`)
        //    .json(usuarioCriado)
        
    }
    
    @Get(':nomeDeUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario)

        return usuarioEncontrado;
    }
}