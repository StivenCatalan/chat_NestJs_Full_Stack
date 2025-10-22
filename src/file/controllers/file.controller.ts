import { Controller, Get, HttpException, HttpStatus, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import type { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from '../services/file.service';
import { ShowFileDto } from '../dto/show-file-dto';

@ApiTags('file')
@Controller('file')
export class FileController {
  constructor(private fileService: FileService) { }

  @Get()
  async findAllFiles() {
    const file = await this.fileService.findAllFiles();
    return file;
  }

  @Get('/:id')
  async findFileById(@Param('id') id: number) {
    const files = await this.fileService.findFileById(id);
    return files;
  }
  
  @Get('show/:id')
  async showFile(@Param() params: ShowFileDto, @Res() res: Response) {
    const file = await this.fileService.getFileById(params.id);
    if (!file) throw new HttpException('File no found', HttpStatus.NOT_FOUND);
;;
    let mimeType = 'application/octet-stream';
    if (file.extension === 'png') mimeType = 'image/png';
    if (file.extension === 'jpg' || file.extension === 'jpeg') mimeType = 'image/jpeg';
    if (file.extension === 'pdf') mimeType = 'application/pdf';

    res.setHeader('Content-Type', mimeType);
    res.setHeader('Content-Disposition', `inline; filename="${file.name}"`);
    return res.send(file.binary);
  }
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, callback) => {
      const allowed = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!allowed.includes(file.mimetype)) {
        return callback(
          new HttpException(
            'File type not allowed only JPG, PNG, or PDF.',
            HttpStatus.BAD_REQUEST,
          ),
          false,
        );
      }
      callback(null, true);
    },
  }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
    },
  })
  async saveFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.saveFile(file);
  }
}