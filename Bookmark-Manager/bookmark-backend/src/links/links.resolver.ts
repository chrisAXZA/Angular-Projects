import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Link } from './link.model';
import { LinksService } from './links.service';
import { GetLinksArgs } from './dto/args/get-links-args.dto';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver(() => Link)
export class LinksResolver {
    constructor(private readonly linksService: LinksService) { }

    @UseGuards(GqlAuthGuard) // protected route
    @Query(() => [Link], { name: 'links' }) // will return an array of links, name is links
    async getLinks(@Args() getLinksArgs: GetLinksArgs) {
        return this.linksService.getLinks(getLinksArgs);
    }

}
