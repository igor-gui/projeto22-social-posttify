import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/createPost.dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
    constructor(private postRepositories: PostsRepository) {}
    async createPost(body: CreatePostDto) {
        const {text, title, image} = body;
        return await this.postRepositories.createPost({text, title, image})
    }
}
