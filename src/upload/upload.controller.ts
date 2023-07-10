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
      case 'title.png':
        url = join(__dirname, '../../static/auth/title.png');
        break;
      case 'subTitle.png':
        url = join(__dirname, '../../static/form/subTitle.png');
        break;
      case 'download.png':
        url = join(__dirname, '../../static/feedback/download.png');
        break;
      case 'background.png':
        url = join(__dirname, '../../static/des/background.png');
        break;
      case 'qrcode-background.png':
        url = join(__dirname, '../../static/background/qrcode-background.png');
        break;
      default:
        url = '';
        break;
    }
    return res.download(url);
  }

  @Public()
  @Get('stream/:path')//流式下载
  async down(@Res() res: Response, @Param('path') path: string) {
    let url = '';
    switch (path) {
      case 'title.png':
        url = join(__dirname, '../../static/auth/title.png');
        break;
      case 'subTitle.png':
        url = join(__dirname, '../../static/form/subTitle.png');
        break;
      case 'download.png':
        url = join(__dirname, '../../static/feedback/download.png');
        break;
      case 'background.png':
        url = join(__dirname, '../../static/des/background.png');
        break;
      case 'qrcode-background.png':
        url = join(__dirname, '../../static/background/qrcode-background.png');
        break;
      default:
        url = '';
        break;
    }
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)

    res.setHeader('Content-Type', 'application/octet-stream');

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=test.zip`,
    );

    tarStream.pipe(res)

  }


}
