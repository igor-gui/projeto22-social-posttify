import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDTO } from './dtos/media.dto';

@Controller('medias')
export class MediaController {
    constructor(private mediaService: MediaService) {
    }
    @Post()
    async createMedia(@Body() body: CreateMediaDTO) {
        const { username, title } = body;
        if (!username || !title) {
            throw new HttpException('All fields are Required!', HttpStatus.BAD_REQUEST);
        }
        try {
            return await this.mediaService.createMedia(body);
        } catch (err) {
            console.log(err.message)
            return err.message;
        }
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

    @Get(':id')
    async getMediaById(@Param('id') id: string) {
        const numberId = Number(id)
        const media = await this.mediaService.getMediaById(numberId);
        if (media !== null) {

            return media;
        }
        else {
            throw new HttpException(
                'Media not found', HttpStatus.NOT_FOUND
            )
        }
    }
}
