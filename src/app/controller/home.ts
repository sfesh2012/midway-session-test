import { controller, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @get('/')
  async index(ctx) {
    console.info(ctx.session.test);
    console.info(ctx.session.maxAge);
    ctx.session.test = 1;
    ctx.body = `Welcome to midwayjs!`;
  }
}
