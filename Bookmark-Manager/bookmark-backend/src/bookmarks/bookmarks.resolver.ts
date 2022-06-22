import { Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { Bookmark } from './models/bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

// resolver will actually create new bookmarks entities
@Resolver(() => Bookmark) // will return a type of bookmark
export class BookmarksResolver {
    constructor(private readonly bookmarksService: BookmarksService) { }

    // only authenticated users should be allowed to create new Bookmarks
    @UseGuards(GqlAuthGuard)
    @Mutation(() => Bookmark) // will return new Bookmark
    async createBookmark() { }
}
