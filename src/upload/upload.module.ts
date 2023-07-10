import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';

import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports: [MulterModule.register({
    storage: diskStorage({//自定义路径
      destination: join(__dirname, '../static/upload'),
      filename: (_, file, cb) => {
        const randomName = Date.now() + '-' + Math.random().toString(36).slice(-8);
        return cb(null, `${randomName}${extname(file.originalname)}`);
      }

    }),

  })
  ],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule { }
