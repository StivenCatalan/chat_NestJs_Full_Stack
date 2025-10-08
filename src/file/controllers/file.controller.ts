import { Controller, Get, Param } from '@nestjs/common';
import { FileService } from '../services/file.service';

@Controller('file')
export class FileController {
  constructor(private fileservice: FileService) {}

  @Get()
  async findAllFiles() {
    const file = await this.fileservice.findAllFiles();
    return file;
  }

  @Get('/:id')
  async findFileById(@Param('id') id: number) {
    const files = await this.fileservice.findFileById(id);
    return files;
  }
}
