import { provide, inject } from 'midway';
import { IUserService, IUserOptions, IUserResult } from '../interface';

@provide('userService')
export class UserService implements IUserService {

  @inject()
  private ctx;

  async getUser(options: IUserOptions): Promise<IUserResult> {

    if (this.ctx) {
      // controller 入口进入 ctx被正常注入
      console.info(this.ctx.request.method);
    } else {
      // webmiddleware 入口进入 ctx没有被正常注入
      console.info(this.ctx);
    }

    return {
      id: options.id,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
