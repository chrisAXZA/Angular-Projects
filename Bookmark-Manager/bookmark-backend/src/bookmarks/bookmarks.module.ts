import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Bookmark } from './models/bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { BookmarksResolver } from './bookmarks.resolver';
import { BookmarkSchema } from './models/bookmark.schema';
import { BookmarksRepository } from './bookmarks.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bookmark.name,
        schema: BookmarkSchema,
      },
    ]),
  ],
  providers: [
    BookmarksResolver,
    BookmarksService,
    BookmarksRepository,
  ]
})
export class BookmarksModule { }
