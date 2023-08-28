import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './media/media.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { PostsRepository } from './posts/posts.repository';

@Module({
  imports: [MediaModule, PrismaModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, PostsRepository],
})
export class AppModule {}
