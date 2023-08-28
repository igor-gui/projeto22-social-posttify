import { CreateMediaDTO } from "src/dtos/media.dto";
import { PrismaService } from "src/prisma/prisma.service";

export class MediaRepository {
    private _prisma: PrismaService
    constructor() { 
        this._prisma = new PrismaService()
    }

    async createMedia(media: CreateMediaDTO) {
        const { title, username } = media;
        return await this.prisma.media.create({
            data: { title, username }
        });
    }
    

    async getMedias() {
        const medias = await this.prisma.media.findMany()
        return medias;
    }

    get prisma(){
        return this._prisma;
    }
}