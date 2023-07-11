
## Description
1. `JWT`验证  
   生成、验证 `token`, 有效时间为`10`分钟,`Guard`全局守卫，
   密钥保存在`config.ts`文件中，`.gitignore`忽略上传

   | Method | Path      | Description | JWT验证 |
   | ------ | --------- | ----------- | ------- |
   | Post   | /getToken | 生成token   | 无      |
   | Post   | /tokenIn  | 验证token   | 有      |


2. 用户`CURD`操作-`Restful`风格  
   `TypeORM`操作`mysql`数据库   
   
   | Method | Path                               | Description  | JWT验证 |
   | ------ | ---------------------------------- | ------------ | ------- |
   | Post   | /user-database                     | 新增用户     | 无      |
   | Get    | /user-database                     | 获取所有用户 | 有      |
   | Get    | /user-database/:username/:password | 获取指定用户 | 有      |
   | Patch  | /user-database/id                  | 修改用户信息 | 有      |
   | Delete | /user-database/id                  | 删除用户     | 有      |

3. 文件-上传/下载
   | Method | Path                 | Description          | JWT验证 |
   | ------ | -------------------- | -------------------- | ------- |
   | Post   | /upload/image        | 上传文件             | 有      |
   | Get    | /upload/expery/:path | 下载文件`download`   | 有      |
   | Get    | /upload/stream/:path | 下载文件`zip-stream` | 有      |

   设置静态资源目录，`/static`目录下的文件可以直接访问
   






## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
