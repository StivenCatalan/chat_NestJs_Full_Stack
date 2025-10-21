import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from '../services/file.service';

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