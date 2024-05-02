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
   * Email
   */
  @Column()
  email: string;

  /**
   * Password
   */
  @Column()
  password: string;

  /**
   * User type
   */
  @Column()
  type: number;

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
