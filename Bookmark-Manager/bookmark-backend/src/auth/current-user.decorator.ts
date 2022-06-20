import { GqlExecutionContext } from "@nestjs/graphql";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

import { User } from "src/users/models/user.model";

export const getCurrentUserByContext = (context: ExecutionContext): User => {
    // function will handle both http requests as well as graphQL requests
    if (context.getType() === 'http') {
        return context.switchToHttp().getRequest().user;
    }

    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req.user;
};

// use as decorator
export const CurrentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext) =>
        getCurrentUserByContext(context), // callback that returns user from current context
);