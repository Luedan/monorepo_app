import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  /**
   * User id
   */
  @PrimaryGeneratedColumn()
  id?: number;

  /**
   * Mili user id
   */
  @Column()
  miliUid: string;

  /**
   * Email
   */
  @Column()
  email: string;

  /**
   * Document number
   */
  @Column()
  documentNumber: string;

  /**
   * Document type
   */
  @Column()
  documentType: string;

  /**
   * Create date
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * Update date
   */
  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * Delete date
   */
  @DeleteDateColumn()
  deletedAt: Date;
}