import { HttpException, HttpStatus } from "@nestjs/common";
import { CreateMediaDTO } from "src/media/dtos/media.dto";
import { PrismaService } from "../prisma/prisma.service";

export class MediaRepository {
    private _prisma: PrismaService
    constructor() {
        this._prisma = new PrismaService()
    }

    async createMedia(media: CreateMediaDTO) {
        const { title, username } = media;
        const existingMedia = await this.prisma.media.findFirst({ where: { title, username } })
        

        if (!existingMedia) {
            return await this.prisma.media.create({
                data: { title, username }
            });
        }
        else {
            throw new HttpException('This media already exists!',HttpStatus.CONFLICT)
        }
    }

    async getMediaById(id: number) {
        return await this.prisma.media.findFirst({ where: { id } })
    }

    async getMedias() {
        const medias = await this.prisma.media.findMany()
        return medias;
    }

    get prisma() {
        return this._prisma;
    }
}