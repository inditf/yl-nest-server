import { Controller, Get, Post, Param, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express/multer';
import { Public } from 'src/public';
import type { Response } from 'express';
import { join } from 'path';
import { zip } from 'compressing';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }
  @Public()
  @Post("/image")
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    // console.log(file);
    return {
      statusCode: 200,
      message: '上传成功',
      data: ''
    };
  }

  @Public()
  @Get('expery/:path')//downolad下载文件
  downolad(@Res() res: Response, @Param('path') path: string) {
    let url = '';
    switch (path) {
      case '1':
        url = join(__dirname, '../static/upload/1688954450122-v0xy3b7g.jpg');
        break;
      default:
        url = '';
        break;
    }
    return res.download(url);
  }

  @Public()
  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../static/upload/1688954450122-v0xy3b7g.jpg')
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)

    res.setHeader('Content-Type', 'application/octet-stream');

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=test`,
    );

    tarStream.pipe(res)

  }


}
