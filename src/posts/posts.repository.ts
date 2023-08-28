import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Post } from './entities/post.entitie';

@Injectable()
export class PostsRepository {
    private _prisma: PrismaService
    constructor() {
        this._prisma = new PrismaService()
    }
    async createPost(post) {
    
        return await this.prisma.posts.create({data: post})
    }

    get prisma() {
        return this._prisma;
    }

}
