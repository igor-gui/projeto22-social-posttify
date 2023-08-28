import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMediaDTO } from 'src/dtos/media.dto';
import { MediaService } from './media.service';

@Controller('medias')
export class MediaController {
    constructor(private mediaService: MediaService) {
    }
    @Post()
    async createMedia(@Body() body: CreateMediaDTO) {
        const { username, title } = await this.mediaService.createMedia(body);
    }

    @Get()
    getMedias() {
        try {
            return this.mediaService.getMedias()
        }
        catch (err) {
            console.log(err)
            return err
        }
    }
}
