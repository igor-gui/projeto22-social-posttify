import { Injectable } from '@nestjs/common';
import { MediaRepository } from './media.repository';
import { CreateMediaDTO } from 'src/dtos/media.dto';

@Injectable()
export class MediaService {

    constructor(public readonly mediaRepositories: MediaRepository) { }

    async createMedia(media: CreateMediaDTO) {

        return await this.mediaRepositories.createMedia(media)
    }

    async getMedias() {
        return await this.mediaRepositories.getMedias()

    }
}
