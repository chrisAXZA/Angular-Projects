import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Bookmark } from './models/bookmark.model';
import { User } from 'src/users/models/user.model';
import { BookmarksService } from './bookmarks.service';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CreateBookmarkInput } from './dto/create-bookmark-input.dto';
import { GetBookmarkArgs } from './dto/args/get-bookmark-args.dto';

// resolver will actually create new bookmarks entities
@Resolver(() => Bookmark) // will return a type of bookmark
export class BookmarksResolver {
    constructor(private readonly bookmarksService: BookmarksService) { }

    // only authenticated users should be allowed to create new Bookmarks
    @UseGuards(GqlAuthGuard)
    @Mutation(() => Bookmark) // will return new Bookmark
    async createBookmark(
        @Args('createBookmarkData') createBookmarkData: CreateBookmarkInput,
        @CurrentUser() user: User // extracts currentUser from request object
    ) {
        return this.bookmarksService.createBookmark(createBookmarkData, user._id);
    }

    // query currently available bookmarks
    @UseGuards(GqlAuthGuard)
    @Query(() => [Bookmark], { name: 'bookmarks' })
    async getBookmarks(@CurrentUser() user: User) { // returns all of the bookmarks created by the given user
        return this.bookmarksService.getBookmarks(user._id);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => Bookmark, { name: 'bookmark' })
    async getBookmark(
        @Args() getBookmarkArgs: GetBookmarkArgs,
        @CurrentUser() user: User, // only user who owns the bookmark should be able to access it
    ) {
        return this.bookmarksService.getBookmark(getBookmarkArgs, user._id);
    }

}
