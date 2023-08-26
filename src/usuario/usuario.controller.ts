import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";

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
        if (!usuarioEncontrado) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuario nao encontrado.'
            });
        }

        return usuarioEncontrado;
    }
}