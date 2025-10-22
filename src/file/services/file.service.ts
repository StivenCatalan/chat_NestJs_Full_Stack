import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from '../entities/file.entity';
import { Repository } from 'typeorm';
import { extname } from 'path';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
  ) { }

  async findAllFiles(): Promise<File[]> {
    const file = await this.fileRepository.find();
    return file;
  }

  async findFileById(id: number): Promise<File | null> {
    const files = await this.fileRepository.findOne({
      where: {
        id: id,
      },
    });
    return files;
  }

  async getFileById(id: number): Promise<File> {
    const file = await this.fileRepository.findOne({ where: { id } });
    if (!file) {
      throw new HttpException('File no found', HttpStatus.NOT_FOUND);
    }
    return file;
  }

  async saveFile(file: Express.Multer.File): Promise<File> {
    if (!file) throw new HttpException('File no found', HttpStatus.BAD_REQUEST);
    const newFile = this.fileRepository.create({
      name: file.originalname,
      extension: extname(file.originalname).replace('.', ''),
      binary: file.buffer,
    });

    return await this.fileRepository.save(newFile);
  }
}