import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/createPost.dto';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    async createPost(@Body() body: CreatePostDto){
        
        return await this.postsService.createPost(body)
    }
}
