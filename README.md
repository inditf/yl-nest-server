
## Description
1. 增加JWT验证，
   1. `/getToken` 生成token, 有效时间为`10`分钟
   2. `/tokenIn` 验证token是否有效,使用`JWT`验证
2. 增加用户`CURD`操作，使用`TypeORM`操作数据库,数据库使用`mysql`
    1. `Get`<strong> :</strong>`/user-database`  获取所有用户
    2. `Get`<strong> :</strong>`/user-database/username`  获取指定用户
    3. `Post`<strong> :</strong>`/user-database`  新增用户
    4. `Patch`<strong> :</strong>`/user-database/id`  修改用户
    5. `Delete`<strong> :</strong>`/user-database/id`  删除用户  
3. 后续修改  
   1. 用户`CURD`操作增加`JWT`验证



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
