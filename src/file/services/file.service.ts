import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from '../entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>,
  ) {}

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
}
