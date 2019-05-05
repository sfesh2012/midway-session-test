import { WebMiddleware, provide, inject } from 'midway';

@provide()
export class ApiMiddleware implements WebMiddleware {
  @inject()
  private userService;

  resolve() {
    return async (ctx, next) => {
      await this.userService.getUser({ id: 1 });
      await next();
    };
  }

}
